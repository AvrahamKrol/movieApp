// Core
import { useQuery } from 'react-query';
import { api } from '../api';

export const useFilmById = (id: string | any) => {
    const { data, isFetched } = useQuery(
        ['filmDetails', id],
        () => api.getMovie(id),
    );

    return {
        isFetched,
        data: {
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
        },
    };
};
