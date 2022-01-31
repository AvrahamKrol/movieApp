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

    if (isFetched && reviews?.length === 0) {
        return (
            <section>
                <h2>Отзывы</h2>
                <Text>Информация отсутствует</Text>
            </section>
        );
    }

    return (
        <List
            className = 'comment-list'
            itemLayout = 'horizontal'
            dataSource = { reviews }
            renderItem = { (item) => (
                <li>
                    <Comment
                        avatar = { <Avatar src = 'https://joeschmoe.io/api/v1/random' alt = 'Han Solo' /> }
                        author = { item.author }
                        content = { item.content } />
                </li>
            ) } />
    );
};
