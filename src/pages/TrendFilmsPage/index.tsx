// Core
import { FC, useState } from 'react';
import { Typography, Tabs, Card, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { useTrendingMovies } from '../../hooks/useTrendingMovies';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Content } = Layout;

export const TrendFilmsPage: FC = () => {
    const [filterMoviesKey, setFilterMoviesKey] = useState('day');
    const { data } = useTrendingMovies(filterMoviesKey);

    const filmSort = (key: string) => {
        setFilterMoviesKey(key);
    };

    const cardJSX = data.map((card) => {
        return (
            <Link
                key = { card.id } to = { card.id }
                className = 'card'>
                <Card
                    hoverable
                    title = { card.title }
                    cover = { <img alt = 'example' src = { card.poster_path } /> }>
                    <Meta title = { card.overview } description = { card.release_year } />
                </Card>
            </Link>
        );
    });

    return (
        <Content>
            <Title>Трендовые фильмы</Title>

            <Tabs
                defaultActiveKey = 'day' onChange = { filmSort }
                centered>
                <TabPane tab = 'За сегодня' key = 'day'>
                    <div className = 'cards'>
                        { cardJSX }
                    </div>
                </TabPane>
                <TabPane tab = 'За неделю' key = 'week'>
                    <div className = 'cards'>
                        { cardJSX }
                    </div>
                </TabPane>
            </Tabs>
        </Content>
    );
};
