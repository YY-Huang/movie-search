import axios from 'axios';

export class TMDB {
    constructor() {
        const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
        
        this.axiosInstance = axios.create({
            baseURL: 'https://api.themoviedb.org/4',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
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

        const res = await this.axiosInstance.get(path, {
            params,
        })

        return res;
    }
}

export default new TMDB();