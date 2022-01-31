// Core
import { FC } from 'react';
import { Table, Image } from 'antd';
import { Link } from 'react-router-dom';

// Hooks
import { useGetPopularMovies } from '../../hooks/useGetPopularMovies';

// Types
import { IPopularMoviesModel } from '../../types';

export const PopularMovies: FC = () => {
    const { data: popularFilms, isFetching } = useGetPopularMovies(1);

    if (isFetching) {
        return null;
    }

    const columns = [
        {
            title:     'Постер',
            dataIndex: 'poster_path',
            key:       'data',
            width:     '238px',
            render:    (poster_path: string, data: IPopularMoviesModel) => <Image
                src = { poster_path } alt = { data.title } />,
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'data',
            width:     '10%',
            render:    (title: string, data: IPopularMoviesModel) => <Link
                to = { `/films/${ data.id }` }>{ title }</Link>,
        },
        {
            title:     'Популярность',
            dataIndex: 'popularity',
            key:       'popularity',
        },
        {
            title:     'Количество голосов',
            dataIndex: 'vote_count',
            key:       'vote_count',
        },
        {
            title:     'Средняя оценка',
            dataIndex: 'vote_average',
            key:       'vote_average',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            width:     '40%',
            key:       'overview',
        },
        {
            title:  'Детали',
            key:    'data',
            render: (data: IPopularMoviesModel) => <Link to = { `/films/${ data.id }` }>Подробнее...</Link>,
        },
    ];

    const dataPopularMovies = popularFilms?.map((film) => {
        return {
            ...film,
            key: film.id,
        };
    });

    return (
        <Table
            dataSource = { dataPopularMovies } columns = { columns }
            bordered = { true } />
    );
};
