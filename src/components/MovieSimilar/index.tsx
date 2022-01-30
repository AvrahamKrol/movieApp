// Core
import { FC } from 'react';
import { Table, Image, PageHeader, Rate } from 'antd';
import { Link } from 'react-router-dom';

// Hooks
import { useGetSimilarFilms } from '../../hooks';

// Constants
import { book } from '../../constants/book';

type Props = {
    params: {
        filmId: string;
    };
};

export const MovieSimilar: FC<Props> = ({ params }) => {
    const { Column, ColumnGroup } = Table;
    const { data: similarFilms, isFetched } = useGetSimilarFilms(params.filmId);

    if (!isFetched && !similarFilms) {
        return null;
    }

    return (
        <>
            <Table
                title = { () => <PageHeader
                    title = 'Рекомендуемые фильмы'
                    className = 'site-page-header' /> }
                dataSource = { similarFilms }
                bordered
                rowKey = { 'id' }
                pagination = { false }>
                <ColumnGroup>
                    <Column
                        title = 'Постер'
                        align = 'center'
                        dataIndex = 'poster_path'
                        key = 'poster_path'
                        width = { '15%' }
                        render = { (poster_path: string) => {
                            return (
                                <Image src = { poster_path } width = { 122 } />
                            );
                        } } />
                    <Column
                        title = 'Название'
                        align = 'center'
                        dataIndex = 'title'
                        width = { '10%' }
                        key = 'title' />
                    <Column
                        title = 'Популярность'
                        align = 'center'
                        dataIndex = 'popularity'
                        width = { '10%' }
                        key = 'popularity'
                        render = { () => {
                            return (
                                <Rate allowHalf defaultValue = { 3.5 } />
                            );
                        } } />
                    <Column
                        title = 'Дата выхода'
                        align = 'center'
                        width = { 10 }
                        dataIndex = 'release_date'
                        key = 'release_date' />
                    <Column
                        title = 'Краткое описание'
                        dataIndex = 'overview'
                        key = 'overview' />
                    <Column
                        title = 'Детали'
                        align = 'center'
                        width = { 150 }
                        dataIndex = 'details'
                        render = { () => {
                            return (
                                <Link to = { book.films.url }>Подробнее...</Link>
                            );
                        } }
                        key = 'details' />
                </ColumnGroup>
            </Table>
        </>
    );
};
