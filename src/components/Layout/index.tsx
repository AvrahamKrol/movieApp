// Core
import { FC } from 'react';
import { Layout } from 'antd';

// Components
import { Navigation } from '../Navigation';
import { FooterMain } from '../Footer';

const { Content } = Layout;

type Props = {
    children: React.ReactElement | React.ReactElement[]
};

export const LayoutMain: FC<Props> = ({ children }) => {
    return (
        <Layout >
            <Navigation />
            <Content>
                { children }
            </Content>
            <FooterMain />
        </Layout>
    );
};
