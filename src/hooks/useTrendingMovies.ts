import { useQuery } from 'react-query';
import { useStore } from '.';
import { api } from '../api';
import { IFilmCard } from '../types/FilmModel';

export const useTrendingMovies = () => {
    const { trendingMoviesStore } = useStore();
    const time = trendingMoviesStore.getFilmsKey();

    const { data, isFetching } = useQuery<IFilmCard[]>(['films', time], () => api.getTrendingMovies(time));

    return {
        data: Array.isArray(data) ? data : [],
        isFetching,
    };
};
