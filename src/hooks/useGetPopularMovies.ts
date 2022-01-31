import { useQuery } from 'react-query';
import { api } from '../api';

export const useGetPopularMovies = (page: number) => {
    const { data, isFetching } = useQuery(
        ['popularMovies', page], () => api.getPopularMovies(page),
    );

    return {
        data,
        isFetching,
    };
};
