import {
    CLEAR_QUERY,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    UPDATE_OPTIONS,
    UPDATE_QUERY,
}  from '../constants';

export const initialState = {
    error: null,
    includeAdult: false,
    language: 'en-us',
    query: '',
    results: [],
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_QUERY:
            return {
                ...state,
                query: '',
            };
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.payload,
            }
        case UPDATE_OPTIONS:
            return {
                ...state,
                includeAdult: action.payload.includeAdult,
                language: action.payload.language,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    };
};

export default searchReducer;