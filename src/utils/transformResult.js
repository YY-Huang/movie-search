import { get } from 'lodash';

export default function (result) {
    let imagePath, title, year, description, voteAverage, voteCount;

    switch(result.media_type) {
        case 'movie':
            description = get(result, 'overview', '');
            imagePath = get(result, 'poster_path', false);
            title = get(result, 'title', '');
            year = get(result, 'release_date', '');
            voteAverage = get(result, 'vote_average', 0);
            voteCount = get(result, 'vote_count', 0);
            break;
        case 'tv':
            description = get(result, 'overview', '');
            imagePath = get(result, 'poster_path', false);
            title = get(result, 'original_name', '');
            year = get(result, 'first_air_date', '');
            voteAverage = get(result, 'vote_average', 0);
            voteCount = get(result, 'vote_count', 0);
            break;
        case 'person':
            const birthday = get(result, 'birthday', '');
            const deathday = get(result, 'deathday', '');
      
            description = get(result, 'biography', '');
            imagePath = get(result, 'profile_path', false);
            title = get(result, 'name', '');
            year = deathday ? `${birthday} - ${deathday}` : birthday;
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
        voteCount
    }
}