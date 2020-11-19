import {
    CLEAR_RESULTS,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    UPDATE_OPTIONS,
    UPDATE_QUERY,
    FILTER_RESULTS,
}  from '../constants';

export const initialState = {
    error: null,
    includeAdult: false,
    language: 'en-us',
    query: '',
    results: [],
    ratingFilter: null,
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_RESULTS:
            return {
                ...state,
                results: [],
            };
        case UPDATE_QUERY:
            return {
                ...state,
                ...action.payload,
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
                page: action.payload.page,
                results: [
                    ...state.results,
                    ...action.payload.results,
                ],
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case FILTER_RESULTS:
            console.log(action.payload)
            const filteredResults = state.results.filter(result => {
                console.log(result.vote_average)
                return Math.floor(result.vote_average / 2) === action.payload
            })
                
            return {
                ...state,
                results: filteredResults,
            }
        default:
            return state;
    };
};

export default searchReducer;