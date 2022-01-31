// Core
import { Card } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFilmCard } from '../../types';

const { Meta } = Card;

export const MovieCard: FC<IFilmCard> = (props) => {
    const { id, title, poster_path, overview, release_year } = props;

    return (
        <Link
            to = { `/films/${id}` }
            className = 'card'>
            <Card
                hoverable
                title = { title }
                cover = { <img alt = 'example' src = { poster_path } /> }>
                <Meta title = { overview } description = { release_year } />
            </Card>
        </Link>
    );
};
