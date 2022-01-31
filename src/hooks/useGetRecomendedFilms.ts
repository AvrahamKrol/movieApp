// Core
import { useQuery } from 'react-query';
import { api } from '../api';

// Other
import { IRecomendedFilms } from '../types';

export const useGetRecomendedFilms = (id: string) => {
    const { data, isFetched } = useQuery<IRecomendedFilms[]>(
        ['recomendedFilms', id],
        () => api.getRecommendationsMovies(id),
    );

    return {
        isFetched,
        data,
    };
};
