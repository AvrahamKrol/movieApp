// Core
import { FC } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Description, Hero, Statistics, LayoutMain, RecomendedFilms, Reviews } from '../../components';

// Hooks
import { useGetFilmById } from '../../hooks';

export const FilmDetails: FC = () => {
    const { filmId } = useParams() as { filmId: string };
    const { data: filmData, isFetched } = useGetFilmById(filmId);
    if (!isFetched || !filmData) {
        return null;
    }

    const {
        title,
        poster_path,
        release_date,
        revenue,
        budget,
        status,
        popularity,
        overview,
        genres,
        vote_count,
        vote_average,
    } = filmData;

    const jenresString = genres.join(', ');

    return (
        <LayoutMain>
            <Hero
                title = { title }
                poster_path = { poster_path } />
            <Description
                status = { status }
                release_date = { release_date }
                overview = { overview }
                vote_count = { vote_count }
                vote_average = { vote_average }
                jenres = { jenresString } />
            <Statistics
                revenue = { revenue }
                budget = { budget }
                popularity = { popularity } />
            <Reviews
                filmId = { filmId } />
            <RecomendedFilms
                filmId = { filmId } />
        </LayoutMain>
    );
};
