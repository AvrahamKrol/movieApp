// Core
import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { LayoutMain } from '../../components/Layout';

export const TopRatedFilmsPage: FC = () => {
    const id = '730154';

    return (
        <LayoutMain>
            <h1>Трендовые фильмы</h1>
            <Link to = { `/films/${id}` }>Подробнее</Link>
        </LayoutMain>

    );
};
