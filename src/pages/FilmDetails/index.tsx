// Core
import { FC } from 'react';
import { Layout } from 'antd';
import { useParams } from 'react-router-dom';

// Components
import { Description, Hero, Statistics, LayoutMain } from '../../components';

// Hooks
import { useGetFilmById } from '../../hooks';

const { Content } = Layout;

export const FilmDetails: FC = () => {
    const params = useParams() as { id: string };
    const { data, isFetched } = useGetFilmById(params.id);
    if (!isFetched || !data) {
        return null;
    }

    const filmData = {
        title:        data?.title,
        poster_path:  data?.poster_path,
        release_date: data?.release_date,
        revenue:      data?.revenue,
        budget:       data?.budget,
        status:       data?.status,
        popularity:   data?.popularity,
        overview:     data?.overview,
        genres:       data?.genres,
        vote_count:   data?.vote_count,
        vote_average: data?.vote_average,
    };

    const jenresString = filmData.genres.join(', ');

    return (
        <LayoutMain>
            <Hero
                title = { filmData.title }
                poster_path = { filmData.poster_path } />
            <Description
                status = { status }
                release_date = { filmData.release_date }
                overview = { filmData.overview }
                vote_count = { filmData.vote_count }
                vote_average = { filmData.vote_average }
                jenres = { jenresString } />
            <Statistics
                revenue = { filmData.revenue }
                budget = { filmData.budget }
                popularity = { filmData.popularity } />
        </LayoutMain>
    );
};
