// Core
import { FC } from 'react';
import { Table, PageHeader } from 'antd';

// Hooks
import { useGetRecomendedFilms } from '../../hooks';

// Other
import { columns } from './columns';
import { IRecomendedFilms } from '../../types';

type Props = {
    filmId: string;
};

export const RecomendedFilms: FC<Props> = ({ filmId }) => {
    const { data: recomendedFilms, isFetched } = useGetRecomendedFilms(filmId);

    if (isFetched && recomendedFilms?.length === 0) {
        return (
            <div className = 'recomended_films'>
                <p>Рекомендуемые фильмы отсутствуют</p>
            </div>
        );
    }


    return (
        <>
            <Table<IRecomendedFilms>
                title = { () => <PageHeader
                    title = 'Рекомендуемые фильмы'
                    className = 'site-page-header' /> }
                dataSource = { recomendedFilms }
                bordered
                rowKey = { 'id' }
                columns = { columns }
                pagination = { false }>
            </Table>
        </>
    );
};
