// Core
import { FC, useEffect } from 'react';
import { Typography, Layout, Row, Col, Image, Descriptions, Statistic, Card } from 'antd';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { TrophyOutlined, DollarOutlined } from '@ant-design/icons';

// Hooks
import { useFilmById, useStore } from '../hooks';

const { Title } = Typography;
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
        // <FilmDetailsStyle>
        <Layout>
            <Content style = { { padding: '0 50px' } }>
                <ToastContainer newestOnTop transition = { Slide } />
                <Title>{ title }</Title>
                <Row justify = 'start' align = 'middle'>
                    <Col span = { 12 }>
                        <Image
                            src = { poster_path }
                            width = { 250 }
                            preview = { false } />
                    </Col>
                </Row>
                <Descriptions
                    column = { 2 }
                    bordered>
                    <Descriptions.Item label = 'Статус' span = { 1 }>{ status }</Descriptions.Item>
                    <Descriptions.Item label = 'Дата выхода' span = { 1 }>{ release_date }</Descriptions.Item>
                    <Descriptions.Item label = 'Количество голосов' span = { 1 }>{ vote_count }</Descriptions.Item>
                    <Descriptions.Item label = 'Средняя оценка' span = { 1 }>{ vote_average }</Descriptions.Item>
                    <Descriptions.Item label = 'Краткое описание' span = { 3 }>{ overview }</Descriptions.Item>
                    <Descriptions.Item label = 'Жанры'>{ genres }</Descriptions.Item>
                </Descriptions>
                <Row style = { { marginLeft: -8, marginRight: -8 } }>
                    <Col span = { 8 } style = { { paddingLeft: 8, paddingRight: 8 } } >
                        <Card bordered = { true }>
                            <Statistic
                                valueStyle = { { color: '#1890ff' } }
                                title = 'popularity'
                                value = { popularity }
                                prefix = { <TrophyOutlined /> } />
                        </Card>
                    </Col>
                    <Col span = { 8 } style = { { paddingLeft: 8, paddingRight: 8 } } >
                        <Card bordered = { true }>
                            <Statistic
                                valueStyle = { { color: '#28d7b5' } }
                                title = 'Budget'
                                value = { budget }
                                prefix = { <DollarOutlined /> } />
                        </Card>
                    </Col>
                    <Col span = { 8 } style = { { paddingLeft: 8, paddingRight: 8 } } >
                        <Card bordered = { true }>
                            <Statistic
                                valueStyle = { { color: '#28d7b5' } }
                                title = 'Revenue'
                                value = { revenue }
                                prefix = { <DollarOutlined /> } />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
        // </FilmDetailsStyle>
    );
});
