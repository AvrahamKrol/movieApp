
// Core
import { useQuery } from 'react-query';
import { api } from '../api';

// Other
import { IFilmCard } from '../types';

export const useGetSimilarFilms = (id: string) => {
    const { data, isFetched } = useQuery<IFilmCard[]>(
        ['similarFilms', id],
        () => api.getSimilarMovies(id),
    );

    return {
        isFetched,
        data,
    };
};
