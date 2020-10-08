import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import {
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    UPDATE_QUERY
} from '../constants';
import TMDB from '../../utils/tmdb';

function* requestSearch() {
    yield delay(500)

    const {
        includeAdult,
        language,
        query
    } = yield select(state => state.search);

    const options = {
        include_adult: includeAdult,
        language,
    }

    try {
        const res = yield call([TMDB, TMDB.search], query, options);
        const results = get(res, 'data.results', []);

        yield put({
            type: SEARCH_SUCCESS,
            payload: results,
        });
    } catch(e) {
        yield put({
            type: SEARCH_FAILURE,
            payload: e,
        });
    };
};

export default function* watchRequestSearch() {
    yield takeLatest(UPDATE_QUERY, requestSearch);
};