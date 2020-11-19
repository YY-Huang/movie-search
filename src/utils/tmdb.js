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

    async getList(id) {
        const path = `/list/${id}`
        const res = await this.axios4.get(path);
        return res;
    }
    /*
        Unfinished feature: Creates a list of favorites
    */
    async createList(id) {
        const path = `/list`
        const res = await this.axios4.post(path, {
            name: id,
            iso_639_1: 'en',
        });
        return res;
    }

    /* Unfinished feature
        Adds to favorite list
    */
    async addToList(id, {
        media_type,
        media_id,
      }) {
        const path = `/list/${id}/items`
        const res = await this.axios4.post(path, {
          items: [
            {
              media_id,
              media_type,
            },
          ],
        });
    
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