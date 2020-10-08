import search, { initialState } from './search';

import {
    CLEAR_QUERY,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    UPDATE_OPTIONS,
    UPDATE_QUERY,
} from '../constants';

test('returns the initial state', () => {
    expect(search(undefined, {})).toEqual(initialState);
});

test('handles CLEAR_QUERY', () => {
    const mockState = {
        ...initialState,
        query: 'spiderman',
    }

    const action = {
        type: CLEAR_QUERY,
    }

    expect(search(mockState, action)).toEqual({
        includeAdult: false,
        language: 'en-us',
        query: '',
        results: [],
    });
});

test('handles UPDATE_QUERY', () => {
    const action = {
        type: UPDATE_QUERY,
        payload: 'spiderman',
    }

    expect(search(undefined, action)).toEqual({
        includeAdult: false,
        language: 'en-us',
        query: 'spiderman',
        results: [],
    });
});

test('handles UPDATE_OPTIONS', () => {
    const action = {
        type: UPDATE_OPTIONS,
        payload: {
            language: 'es-mx',
            includeAdult: true,
        },
    }

    expect(search(undefined, action)).toEqual({
        includeAdult: true,
        language: 'es-mx',
        query: '',
        results: [],
    });
});

test('handles SEARCH_SUCCESS', () => {
    const action = {
        type: SEARCH_SUCCESS,
        payload: [
            'these',
            'are',
            'valid',
            'search',
            'results',
        ],
    }

    expect(search(undefined, action)).toEqual({
        includeAdult: false,
        language: 'en-us',
        query: '',
        results: [
            'these',
            'are',
            'valid',
            'search',
            'results',
        ],
    });
})
