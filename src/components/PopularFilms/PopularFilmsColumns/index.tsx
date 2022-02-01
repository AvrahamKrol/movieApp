// Core
import { Image } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

// Types
import { IPopularFilmsModel } from '../../../types';

// Components
import { LinkToFilm } from '../../LinkToFilm';

export const PopularFilmsColumns: ColumnsType<IPopularFilmsModel> = [
    {
        title:     'Постер',
        dataIndex: 'poster_path',
        key:       'data',
        width:     '238px',
        align:     'center',
        render:    (poster_path: string, data) => <Image
            src = { poster_path } alt = { data.title } />,
    },
    {
        title:     'Название',
        dataIndex: 'title',
        key:       'data',
        width:     '10%',
        align:     'center',
        render:    (title: string, data) => <LinkToFilm id = { `${data.id}` }  filmName = { `${title}` } />,
    },
    {
        title:     'Популярность',
        dataIndex: 'popularity',
        align:     'center',
    },
    {
        title:     'Количество голосов',
        dataIndex: 'vote_count',
        align:     'center',
    },
    {
        title:     'Средняя оценка',
        dataIndex: 'vote_average',
        align:     'center',
    },
    {
        title:     'Краткое описание',
        dataIndex: 'overview',
        width:     '40%',
    },
    {
        title:     'Детали',
        dataIndex: 'id',
        align:     'center',
        render:    (id) => <LinkToFilm id = { id }  filmName = 'Подробнее...' />,
    },
];
