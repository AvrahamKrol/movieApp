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
    const { data: similarFilms, isFetched } = useGetRecomendedFilms(filmId);

    if (!isFetched && !similarFilms) {
        return null;
    }


    return (
        <>
            <Table<IRecomendedFilms>
                title = { () => <PageHeader
                    title = 'Рекомендуемые фильмы'
                    className = 'site-page-header' /> }
                dataSource = { similarFilms }
                bordered
                rowKey = { 'id' }
                columns = { columns }
                pagination = { false }>
            </Table>
        </>
    );
};
