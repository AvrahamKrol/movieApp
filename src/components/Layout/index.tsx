// Core
import { FC } from 'react';
import { Layout } from 'antd';

// Components
import { Navigation } from '../Navigation';

// Styles
import { LayoutWrapper } from '../styled/Layout.styles';

const { Content } = Layout;

type Props = {
    children: React.ReactElement | React.ReactElement[]
};

export const LayoutMain: FC<Props> = ({ children }) => {
    return (
        <LayoutWrapper >
            <Navigation />
            <Content>
                { children }
            </Content>
        </LayoutWrapper>
    );
};
