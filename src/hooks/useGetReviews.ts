// Core
import { useQuery } from 'react-query';
import { api } from '../api';

// Other
import { IReview } from '../types';

export const useGetReviews = (id: string) => {
    const { data, isFetched } = useQuery<IReview[]>(
        ['reviews', id],
        () => api.getReviewsToMovie(id),
    );

    return {
        isFetched,
        data,
    };
};
