// Core
import { useQuery } from 'react-query';
import { api } from '../api';

// Other
import { IFilmDetails } from '../types';

export const useGetFilmById = (id: string) => {
    const { data, isFetched } = useQuery<IFilmDetails>(
        ['filmDetails', id],
        () => api.getMovie(id),
    );

    return {
        isFetched,
        data,
    };
};
