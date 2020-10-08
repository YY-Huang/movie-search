import {
    SEARCH_SUCCESS,
    UPDATE_QUERY,
} from '../constants';
import TMDB from '../../utils/tmdb';
import { get } from 'lodash';

export const updateQuery = query => {
    return {
        type: UPDATE_QUERY,
        payload: query,
    };
};

export const requestSearch = (query, options) => {
    return async dispatch => {
        const res = await TMDB.search(query, options);
        const results = get(res, 'data.results', []);

        dispatch(searchSucess(results))
    };
};

export const searchSuccess = results => {
    return {
        type: SEARCH_SUCCESS,
        payload: results,
    };
};