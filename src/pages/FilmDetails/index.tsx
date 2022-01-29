// Core
import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';

// Hooks
import { useFilmById, useStore } from '../../hooks';
import { Description, Hero, Statistics } from '../../components';

const { Content } = Layout;

export const FilmDetails: FC = observer(() => {
    const params = useParams();
    const { data: filmData, isFetched } = useFilmById(params.id);
    const  {
        title,
        poster_path,
        release_date,
        revenue,
        budget,
        status,
        popularity,
        overview,
        genres,
        vote_count,
        vote_average }  = filmData;

    const jenresString = genres?.join(', ');
    // eslint-disable-next-line no-console
    console.log(filmData);

    const { uiStore } = useStore();
    const { errorMessage, resetError } = uiStore;

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       7000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });
            notify();

            resetError();
        }
    }, [errorMessage]);

    return (
        <Layout>
            <Content style = { { padding: '0 50px' } }>
                <ToastContainer newestOnTop transition = { Slide } />
                <Hero
                    title = { title }
                    poster_path = { poster_path } />
                <Description
                    status = { status }
                    release_date = { release_date }
                    overview = { overview }
                    vote_count = { vote_count }
                    vote_average = { vote_average }
                    jenres = { jenresString } />
                <Statistics
                    revenue = { revenue }
                    budget = { budget }
                    popularity = { popularity } />
            </Content>
        </Layout>
    );
});
