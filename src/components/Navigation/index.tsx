// Cor
import { FC } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

// Hooks
import { useCurrentPage } from '../../hooks';

// Constants
import { book } from '../../constants/book';

const { Header } =    Layout;

export const Navigation: FC = () => {
    const pageKey = useCurrentPage();

    return (
        <Header>
            <p className = 'logo'>Movie App</p>
            <Menu
                theme = 'dark' mode = 'horizontal'
                selectedKeys = { [pageKey] }>
                <Menu.Item key = { book.root.key }>
                    <Link to = { book.root.url }>Главная</Link>
                </Menu.Item>
                <Menu.Item key = { book.films.key }>
                    <Link to = { book.films.url }>Фильмы</Link>
                </Menu.Item>
                <Menu.Item key = { book.popularFilms.key }>
                    <Link to = { book.popularFilms.url }>Популярные фильмы</Link>
                </Menu.Item>
                <Menu.Item key = { book.topRatedFilms.key }>
                    <Link to = { book.topRatedFilms.url }>Трендовые фильмы</Link>
                </Menu.Item>
                <Menu.Item key = { book.latestFilms.key }>
                    <Link to = { book.latestFilms.url }>Последние вышедшие фильмы</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
