// Core
import { FC } from 'react';
import { Typography, Tabs } from 'antd';
import { observer } from 'mobx-react-lite';

// Components
import { MovieCard } from '../MovieCard';
import { Loader } from '../Loader';

// Hooks
import { useStore, useTrendingMovies } from '../../hooks';

const { Title } = Typography;
const { TabPane } = Tabs;

export const TrendingMovies: FC = observer(() => {
    const { trendingMoviesStore } = useStore();
    const { data, isFetching } = useTrendingMovies();

    const filmSort = (key: string) => {
        trendingMoviesStore.setFilmsKey(key);
    };


    const cardJSX = data?.map((card) => {
        return <MovieCard key = { card.id } { ...card } />;
    });

    return (
        <>
            <Title>Трендовые фильмы</Title>
            <Tabs
                defaultActiveKey = 'day' onChange = { filmSort }
                centered>
                <TabPane tab = 'За сегодня' key = 'day'>
                    <div className = 'cards'>
                        {
                            isFetching ? <Loader /> : cardJSX
                        }
                    </div>
                </TabPane>
                <TabPane tab = 'За неделю' key = 'week'>
                    <div className = 'cards'>

                        {
                            isFetching ? <Loader /> : cardJSX
                        }
                    </div>
                </TabPane>
            </Tabs>
        </>
    );
});
