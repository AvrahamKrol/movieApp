import { FC } from 'react';
import { Typography, Row, Col, Image } from 'antd';

const { Title } = Typography;

type Props = {
    title: string;
    poster_path: string;
};

export const Hero: FC<Props> = (props) => {
    return (
        <>
            <Title>{ props.title }</Title><Row justify = 'start' align = 'middle'>
                <Col span = { 12 }>
                    <Image
                        src = { props.poster_path }
                        width = { 250 }
                        preview = { false } />
                </Col>
            </Row>
        </>
    );
};
