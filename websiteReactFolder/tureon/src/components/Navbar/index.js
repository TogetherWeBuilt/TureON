import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
const Navbar= ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80 ) {
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
    }
    useEffect (() =>  {
      window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome =() => {
        scroll.scrollToTop()
  }


  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
            <NavLogo to='/'onClick={toggleHome}>TureON</NavLogo>
            <MobileIcon onClick={toggle}>
               <FaBars/>
            </MobileIcon>
            <NavMenu>

               <NavItem>
                <NavLinks to='types'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Overview</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='Overview'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Visualisation</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='/Footer'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Contacts</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='/Footer'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >About</NavLinks>
               </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;


/*                <NavItem>
              <NavLinks to='introduction'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
                >Overview</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='benefits'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Benefit</NavLinks>
               </NavItem> */