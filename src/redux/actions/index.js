import {
    GET_NEXT_PAGE,
    SEARCH_SUCCESS,
    UPDATE_QUERY,
    FILTER_RESULTS,
} from '../constants';

export const updateQuery = query => {
    return {
        type: UPDATE_QUERY,
        payload: query,
    };
};

export const getNextPage = page => {
    return {
        type: GET_NEXT_PAGE,
        payload: page,
    }
}

export const searchSuccess = results => {
    return {
        type: SEARCH_SUCCESS,
        payload: results,
    };
};

export const filterResults = voteAverage => {
    return {
        type: FILTER_RESULTS,
        payload: voteAverage
    }
}