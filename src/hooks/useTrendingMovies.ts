import { useQuery } from 'react-query';
import { api } from '../api';
import { IFilmCard } from '../types/FilmModel';

export const useTrendingMovies = (time: string) => {
    const { data, isFetching } = useQuery<IFilmCard[]>(['films', time], () => api.getTrendingMovies(time));

    return {
        data: Array.isArray(data) ? data : [],
        isFetching,
    };
};
