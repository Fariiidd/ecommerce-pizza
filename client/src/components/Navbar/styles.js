import styled from "styled-components";
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

import LocalPizzaIcon from '@material-ui/icons/LocalPizza'

export const Nav = styled.nav`
    overflow: hidden
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const ContainerNavbar = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    $(Container)
`;

export const Logo = styled(Link)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const Icon = styled(LocalPizzaIcon)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
    } 
`;
