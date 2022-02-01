// Core
import { FC, useState } from 'react';
import { Table, PageHeader } from 'antd';

// Hooks
import { useGetPopularFilms } from '../../hooks/useGetPopularFilms';

// Columns
import { PopularFilmsColumns } from './PopularFilmsColumns';

export const PopularFilms: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: popularFilms, isFetching } = useGetPopularFilms(currentPage);

    if (isFetching) {
        return null;
    }

    const tableTitleJSX = () => {
        return <PageHeader
            className = 'site-page-header'
            title = 'Популярные фильмы' />;
    };

    const paginationConfig = {
        current:         currentPage,
        pageSize:        20,
        total:           2000,
        showSizeChanger: false,
        showQuickJumper: true,
        onChange:        (page: number) => {
            setCurrentPage(page);
        },
    };

    return (
        <Table
            title = { tableTitleJSX }
            dataSource = { popularFilms }
            columns = { PopularFilmsColumns }
            bordered = { true }
            rowKey = 'id'
            pagination = { { ...paginationConfig } } />

    );
};
