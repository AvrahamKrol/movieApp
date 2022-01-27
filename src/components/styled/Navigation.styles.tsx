import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const NavigationWrapper = styled(Header)`
    display: flex;
    margin-bottom: 24px
`;

export const LogoWrapper = styled.p`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-right: 25px;
    font-family: "Caveat", sans-serif;
    font-size: 28px;
    color: #fff;
    user-select: none;
    transform: skewY(170deg);
`;

export const MenuWrapper = styled(Menu)`
    && {
        margin: 0 0 0 16px
    }; 
`;
