import styled from "styled-components";
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

import LocalPizzaIcon from '@material-ui/icons/LocalPizza'

export const Nav = styled.nav`
    background: #F7CCAC;
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
    color: #3A3845;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #826F66;
    }
`;

export const Icon = styled(LocalPizzaIcon)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #3A3845;
    @media screen and (max-width: 960px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;

        &:hover {
            color: #826F66;
        }
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #826F66;
    }
`;

export const Item = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #3A3845;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const Links = styled(Link)`
    color: #3A3845;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        color: #826F66;
    }

    @media screen and (max-width: 960px) {
        color: #F7CCAC;
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #3A3845;
            transition: all 0.3s ease;
        }
    }
`; 
