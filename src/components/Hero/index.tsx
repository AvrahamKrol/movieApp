import { FC } from 'react';
import { Typography, Row, Col, Image } from 'antd';

/* * */

const { Title } = Typography;

type Props = {
    title: string;
    poster_path: string;
};

export const Hero: FC<Props> = ({ title, poster_path }) => {
    return (
        <>
            <Title>{ title }</Title>
            <Row justify = 'start' align = 'middle'>
                <Col span = { 12 }>
                    <Image
                        src = { poster_path }
                        width = { 250 }
                        alt = { title }
                        preview = { false } />
                </Col>
            </Row>
        </>
    );
};
