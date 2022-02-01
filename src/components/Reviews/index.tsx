// Core
import { FC } from 'react';
import { Comment, List, Avatar, Typography } from 'antd';

// Hooks
import { useGetReviews } from '../../hooks/useGetReviews';

type Props = {
    filmId: string;
};
// 817648
export const Reviews: FC<Props> = ({ filmId }) => {
    const { Text } = Typography;
    const { data: reviews, isFetched } = useGetReviews(filmId);
    const isReviews = isFetched && reviews?.length !== 0;

    return (
        <section>
            <h2>Отзывы</h2>
            { isReviews ? (
                <List
                    className = 'comment-list'
                    itemLayout = 'horizontal'
                    dataSource = { reviews }
                    renderItem = { (item) => (
                        <List.Item>
                            <Comment
                                avatar = { <Avatar src = { `https://joeschmoe.io/api/v1/random-${item.id}` } alt = { item.author } /> }
                                author = { item.author }
                                content = {  <p>{ item.content }</p> } />
                        </List.Item>
                    ) } />
            ) : <Text>Информация отсутствует</Text> }
        </section>
    );
};
