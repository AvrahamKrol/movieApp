// Core
import { FC } from 'react';
import { List, Card, Typography } from 'antd';

// Hooks
import { useGetSimilarFilms } from '../../hooks';
import { Link } from 'react-router-dom';
import { book } from '../../constants/book';

type Props = {
    filmId: string;
};

export const SimilarFilms: FC<Props> = ({ filmId }) => {
    const { data: similarFilms, isFetched } = useGetSimilarFilms(filmId);
    const { Title } = Typography;
    const { Meta } = Card;

    if (isFetched && similarFilms?.length === 0) {
        return (
            <div className = 'recomended_films'>
                <p>Похожие фильмы отсутствуют</p>
            </div>
        );
    }

    return (
        <section>
            <Title level = { 2 }>Похожие фильмы</Title>
            <List
                grid = { { gutter: 16, column: 5 } }
                dataSource = { similarFilms }
                itemLayout = 'horizontal'
                renderItem = { (item) => {
                    return (
                        <>
                            <Link
                                to = { `${book.films.url}/${item.id}` }>
                                <Card
                                    title = { item.title }
                                    hoverable
                                    cover = { <img
                                        alt = { item.title }
                                        src = { item.poster_path } /> }>
                                    <Meta
                                        title = { item.release_date }
                                        description = { item.overview } />
                                </Card>
                            </Link>
                        </>
                    );
                } } />
        </section>
    );
};
