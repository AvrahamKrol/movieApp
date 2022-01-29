import { FC } from 'react';
import { Row, Col, Statistic, Card } from 'antd';
import { TrophyOutlined, DollarOutlined } from '@ant-design/icons';

type Props = {
    popularity: number;
    budget: number;
    revenue: number;
};

export const Statistics: FC<Props> = (props) => {
    const {
        popularity,
        budget,
        revenue,
    } = props;


    return (
        <Row gutter = { 16 } >
            <Col span = { 8 } >
                <Card>
                    <Statistic
                        valueStyle = { { color: '#1890ff' } }
                        title = 'popularity'
                        value = { popularity }
                        prefix = { <TrophyOutlined /> } />
                </Card>
            </Col>
            <Col span = { 8 } >
                <Card>
                    <Statistic
                        valueStyle = { { color: '#28d7b5' } }
                        title = 'Budget'
                        value = { budget }
                        prefix = { <DollarOutlined /> } />
                </Card>
            </Col>
            <Col span = { 8 } >
                <Card>
                    <Statistic
                        valueStyle = { { color: '#28d7b5' } }
                        title = 'Revenue'
                        value = { revenue }
                        prefix = { <DollarOutlined /> } />
                </Card>
            </Col>
        </Row>
    );
};
