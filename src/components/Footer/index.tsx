// Core
import { FC } from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const FooterMain: FC = () => {
    const date = new Date();

    const currenYear = date.getFullYear();


    return (
        <Footer>
            <Text>&copy;{ currenYear } — Lectrum LLC</Text>
        </Footer>
    );
};
