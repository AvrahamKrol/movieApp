// Core
import { FC } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

// Styles
import { LogoWrapper, MenuWrapper, NavigationWrapper } from '../styled/Navigation.styles';

export const Navigation: FC = () => {
    return (
        <NavigationWrapper>
            <LogoWrapper>Movie App</LogoWrapper>
            <MenuWrapper
                theme = 'dark' mode = 'horizontal'>
                <Menu.Item>
                    <NavLink to = '/'>Главная</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/popular-films'>Популярные фильмы</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/top-rated-films'>Трендовые фильмы</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to = '/latest-films'>Последние вышедшие фильмы</NavLink>
                </Menu.Item>
            </MenuWrapper>
        </NavigationWrapper>
    );
};
