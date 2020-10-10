import axios from 'axios';
import { get } from 'lodash';

export class TMDB {
    constructor() {
        const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

        this.axios3 = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            params: {
                api_key: process.env.REACT_APP_API_KEY,
            },
        });
        
        this.axios4 = axios.create({
            baseURL: 'https://api.themoviedb.org/4',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    async configure() {
        const path = 'configuration';

        try {
            const config = await this.axios3.get(path);

            this.config = get(config, 'data', {});
        } catch(e) {
            console.log(e);
        }
    }

    async search(query, options) {
        const path = '/search/multi';
        const defaultOptions = {
            includeAdult: false,
            language: 'en-us',
        };

        const params = {
            ...defaultOptions,
            ...options,
            query
        }

        const res = await this.axios4.get(path, {
            params,
        })

        return res;
    }

    async getPerson(id) {
        const path = `/person/${id}`
        const res = await this.axios3.get(path);
        return res;
    }

    async constructImageURL(path, size = 'original') {
        if (!this.config) {
            await this.configure();
        }

        const imageConfig = get(this.config, 'images', {});
        const secureBaseUrl = get(imageConfig, 'secure_base_url', '');

        return path ? `${secureBaseUrl}${size}${path}` : null;
    }
}

export default new TMDB();