import { all } from 'redux-saga/effects';
import watchRequestsearch from './search';
import { rootCertificates } from 'tls';

export default function* rootSaga() {
    yield all([
        watchRequestsearch(),
    ]);
};