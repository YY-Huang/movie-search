import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import {
    CLEAR_RESULTS,
    GET_NEXT_PAGE,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    UPDATE_QUERY
} from '../constants';
import tmdb from '../../utils/tmdb';

function* requestSearch() {
    yield delay(500)

    yield put({
        type: CLEAR_RESULTS,
    });

    yield put({
        type: GET_NEXT_PAGE,
        payload: 1,
    });
};

function* getNextPage({ payload }) {

    const {
        includeAdult,
        language,
        query,
    } = yield select(state => state.search);
    
    const options = {
        includeAdult,
        language,
        page: payload || 1,
    };

    try {
        const res = yield call([tmdb, tmdb.search], query, options);
        const results = get(res, 'data.results', []);
        const newPage = get(res, 'data.page', payload + 1);

        for (let [index, result] of results.entries()) {
            switch(result.media_type) {
                case 'movie':
                case 'tv':
                    result.poster_path = yield call([tmdb, tmdb.constructImageURL], result.poster_path, 'w300');
                    break;
                case 'person':
                    const personRes = yield call([tmdbb, tmdb.getPerson], result.id);
                    const person = get(personRes, 'data', {});

                    person.media_type = 'person';
                    person.profile_path = yield call([tmdb, tmdb.constructImageURL], person.profile_path, 'w300');
                    results[index] = person;
                    break;
                default:
                    break;
            }
        }

        yield put({
            type: SEARCH_SUCCESS,
            payload: {
                results,
                page: newPage,
            },
        });
    } catch(e) {
        yield put({
            type: SEARCH_FAILURE,
            payload: e,
        });
    };
}
export function* watchRequestSearch() {
    yield takeLatest(UPDATE_QUERY, requestSearch);
};

export function* watchGetNextPage() {
    yield takeLatest(GET_NEXT_PAGE, getNextPage);
}