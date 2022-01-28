// Cor
import { FC } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks';

const { Header } =    Layout;

export const Navigation: FC = () => {
    const { pathname, filmUrl } = useCurrentPage();

    return (
        <Header>
            <p className = 'logo'>Movie App</p>
            <Menu
                theme = 'dark' mode = 'horizontal'
                selectedKeys = { [pathname] }>
                <Menu.Item key = '/'>
                    <Link to = '/'>Главная</Link>
                </Menu.Item>
                <Menu.Item key = { filmUrl?.pathname || '' }>
                    <Link to = '/films'>Фильмы</Link>
                </Menu.Item>
                <Menu.Item key = '/popular-films'>
                    <Link to = '/popular-films'>Популярные фильмы</Link>
                </Menu.Item>
                <Menu.Item key = '/top-rated-films'>
                    <Link to = '/top-rated-films'>Трендовые фильмы</Link>
                </Menu.Item>
                <Menu.Item key = '/latest-films'>
                    <Link to = '/latest-films'>Последние вышедшие фильмы</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
