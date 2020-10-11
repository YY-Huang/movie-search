import { get } from 'lodash';
import moment from 'moment';

export default function (result) {
    let imagePath, title, year, description, voteAverage, voteCount;

    switch(result.media_type) {
        case 'movie':
            description = get(result, 'overview', '');
            imagePath = get(result, 'poster_path', false);
            title = get(result, 'title', '');
            year = get(result, 'release_date', '').split('-')[0];
            voteAverage = get(result, 'vote_average', 0);
            voteCount = get(result, 'vote_count', 0);
            break;
        case 'tv':
            description = get(result, 'overview', '');
            imagePath = get(result, 'poster_path', false);
            title = get(result, 'original_name', '');
            year = get(result, 'first_air_date', '').split('-')[0];
            voteAverage = get(result, 'vote_average', 0);
            voteCount = get(result, 'vote_count', 0);
            break;
        case 'person':
            const birthday = (get(result, 'birthday') || '').split('-')[0];
            const deathday = (get(result, 'deathday') || '').split('-')[0];
      
            description = get(result, 'biography', '');
            imagePath = get(result, 'profile_path', false);
            title = get(result, 'name', '');
            
            if (deathday && birthday) {
                year = `${birthday}-${deathday} (died age ${moment(deathday).diff(birthday, 'years')})`
            } else if (birthday) {
                year = `Born ${birthday.split('-')[0]} (age ${moment().diff(birthday, 'years')})`
            } else {
                year = '';
            }
            break;
        default:
            break;
    }

    return {
        imagePath,
        title,
        year,
        description,
        voteAverage,
        voteCount,
        mediaType: result.media_type,
    }
}