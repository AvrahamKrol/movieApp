import { useQuery } from 'react-query';

// Store
import { useStore } from './useStore';

// Api
import { api } from '../api';

// Types
import { IFilmCard } from '../types';

export const useTrendingMovies = () => {
    const { trendingMoviesStore } = useStore();
    const time = trendingMoviesStore.getFilmsKey();

    const { data, isFetching } = useQuery<IFilmCard[]>(['films', time], () => api.getTrendingMovies(time));

    return {
        data,
        isFetching,
    };
};
