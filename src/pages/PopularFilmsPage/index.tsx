// Core
import { FC } from 'react';

// Components
import { LayoutMain } from '../../components/Layout';
import { PopularFilms } from '../../components/PopularFilms';

export const PopularFilmsPage: FC = () => {
    return (
        <LayoutMain>
            <PopularFilms />
        </LayoutMain>

    );
};
