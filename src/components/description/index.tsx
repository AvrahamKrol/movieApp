import { FC } from 'react';
import { Descriptions } from 'antd';

type Props = {
    status:string;
    release_date:string;
    vote_count:number;
    vote_average:number;
    overview:string;
    jenres:string;
};

export const Description: FC<Props> = (props) => {
    const {
        status,
        release_date,
        vote_count,
        vote_average,
        overview,
        jenres,
    } = props;

    return (
        <Descriptions
            column = { 2 }
            bordered>
            <Descriptions.Item label = 'Статус' span = { 1 }>{ status }</Descriptions.Item>
            <Descriptions.Item label = 'Дата выхода' span = { 1 }>{ release_date }</Descriptions.Item>
            <Descriptions.Item label = 'Количество голосов' span = { 1 }>{ vote_count }</Descriptions.Item>
            <Descriptions.Item label = 'Средняя оценка' span = { 1 }>{ vote_average }</Descriptions.Item>
            <Descriptions.Item label = 'Краткое описание' span = { 3 }>{ overview }</Descriptions.Item>
            <Descriptions.Item label = 'Жанры'>{ jenres }</Descriptions.Item>
        </Descriptions>
    );
};
