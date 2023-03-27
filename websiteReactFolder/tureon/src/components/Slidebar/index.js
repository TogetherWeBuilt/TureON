import React from 'react';
import { SlidebarContainer, Icon, CloseIcon, SlidebarWapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SlidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SlidebarContainer isOpen={ isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon />
       </Icon>
       <SlidebarWapper>
         <SidebarMenu>
            <SidebarLink to='type' onClick={toggle}>
                Overview
            </SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>
                Visualization
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
                Contacts
            </SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>
                About
            </SidebarLink>
         </SidebarMenu>
         <SideBtnWrap>
            <SidebarRoute to='/signin'>
                Sign In
            </SidebarRoute>
         </SideBtnWrap>
       </SlidebarWapper>
    </SlidebarContainer>
  )
}

export default Sidebar