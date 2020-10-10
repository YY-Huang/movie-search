import { get } from 'lodash';
import tmdb, { TMDB } from './tmdb';

test('creates an instance of a TMDB API controller', () => {
    expect(tmdb).toBeInstanceOf(TMDB);
});

test('TMDB can fetch and set a config', async () => {
    await tmdb.configure();

    expect(tmdb).toHaveProperty('config');
})

test('TMDB.search GETs a 200 OK response from the API', async () => {
    const res = await tmdb.search('spiderman');
    expect(res).toHaveProperty('status', 200);
});

test('TMDB.search can handle queries that are not URI encoded', async () => {
    const res = await tmdb.search('spiderman', {
        language: 'es-mx',
    })
    const resultsLength = get(res, 'data.results.length', 0);

    expect(resultsLength).toBeGreaterThan(0);
});

test('TMDB.search can include and exclude adult content', async () => {
    const includeRes = await tmdb.search('Chris Evans', {
        include_adult: true,
    });

    const includeResultsLength = get(includeRes, 'data.results.length', 0);

    const excludeRes = await tmdb.search('Chris Evans', {
        include_adult: false,
    });

    const excludeResultsLength = get(excludeRes, 'data.results.length', 0);

    expect(includeResultsLengths).toBeGreaterThan(excludeResultsLength);
})