// Core
import { FC } from 'react';

// Components
import { LayoutMain } from '../../components/Layout';
import { PopularMovies } from '../../components/PopularMovies';

export const PopularMoviesPage: FC = () => {
    return (
        <LayoutMain>
            <PopularMovies />
        </LayoutMain>

    );
};
