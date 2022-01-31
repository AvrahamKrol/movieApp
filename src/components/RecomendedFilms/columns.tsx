import { Image, Rate } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

// Other
import { IRecomendedFilms } from '../../types';
import { book } from '../../constants/book';


export const columns: ColumnsType<IRecomendedFilms> = [
    {
        title:     'Постер',
        dataIndex: 'poster_path',
        key:       'poster_path',
        align:     'center',
        width:     '15%',
        render:    (path: string) => {
            return path ? (
                <Image src = { path } alt = 'Poster' />
            ) : <p>Отсутствует</p>;
        },
    },
    {
        title:     'Название',
        dataIndex: 'title',
        key:       'title',
        align:     'center',
        width:     '10%',
    },
    {
        title:     'Популярность',
        dataIndex: 'vote_average',
        key:       'vote_average',
        align:     'center',
        width:     '10%',
        render:    (rate: number) => {
            return (
                <Rate allowHalf defaultValue = { (rate / 2) } />
            );
        },
    },
    {
        title:     'Дата выхода',
        dataIndex: 'release_date',
        key:       'release_date',
        align:     'center',
        width:     '10%',
    },
    {
        title:     'Краткое описание',
        dataIndex: 'overview',
        key:       'overview',
    },
    {
        title:     'Детали',
        dataIndex: 'details',
        key:       'details',
        align:     'center',
        width:     150,
        render:    () => {
            return (
                <Link to = { book.films.url }>Подробнее...</Link>
            );
        },
    },
];
