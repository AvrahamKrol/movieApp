// Core
import { FC } from 'react';

// Components
import { LayoutMain } from '../../components/Layout';
import { TrendingMovies } from '../../components/TrendingMovies';

export const TrendFilmsPage: FC = () => {
    return (
        <LayoutMain>
            <TrendingMovies />
        </LayoutMain>
    );
};
