// Core
import { FC } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const Navigation: FC = () => {
    return (
        <Header>
            <p className = 'logo'>Movie App</p>
            <Menu
                theme = 'dark' mode = 'horizontal'
                defaultSelectedKeys = { ['main'] }>
                <Menu.Item key =  'main'>
                    <Link to = '/'>Главная</Link>
                </Menu.Item>
                <Menu.Item key = 'popular'>
                    <Link to = '/popular-films'>Популярные фильмы</Link>
                </Menu.Item>
                <Menu.Item key = 'rated'>
                    <Link to = '/top-rated-films'>Трендовые фильмы</Link>
                </Menu.Item>
                <Menu.Item key = 'latest'>
                    <Link to = '/latest-films'>Последние вышедшие фильмы</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
