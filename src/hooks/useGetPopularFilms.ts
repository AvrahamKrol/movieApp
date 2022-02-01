// Core
import { useQuery } from 'react-query';
import { api } from '../api';

export const useGetPopularFilms = (page: number) => {
    const { data, isFetching } = useQuery(
        ['popularMovies', page], () => api.getPopularMovies(page),
    );

    return {
        data,
        isFetching,
    };
};
