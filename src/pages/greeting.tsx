// Core
import { FC } from 'react';
import { Layout } from 'antd';


import { FilmDetails } from '.';

const { Content } = Layout;

export const Greeting: FC = () => {
    return (
        <Layout>
            <Content>
                <FilmDetails />
            </Content>
        </Layout>
    );
};
