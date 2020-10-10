import { all } from 'redux-saga/effects';
import { 
    watchGetNextPage, 
    watchRequestSearch, 
} from './search';

export default function* rootSaga() {
    yield all([
        watchGetNextPage(),
        watchRequestSearch(),
    ]);
};