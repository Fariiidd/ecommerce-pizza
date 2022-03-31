import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Nav, ContainerNavbar, Logo, Icon, MobileIcon } from './styles';

const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick((prevClick) => !prevClick);  

  return (
    <>
        <Nav>
            <ContainerNavbar>
                <Logo to="/">
                    <Icon />
                    PIZZA
                </Logo>
                <MobileIcon onClick={handleClick}>
                    {click ? <CloseIcon /> : <MenuIcon />}
                </MobileIcon>
            </ContainerNavbar>
        </Nav>
    </>
  )
}

export default Navbar