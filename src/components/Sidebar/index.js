import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Page1" onClick={toggle}>
                        Page1
                    </SidebarLink>
                    <SidebarLink to="Page2" onClick={toggle}>
                        Page2
                    </SidebarLink>
                    <SidebarLink to="Page3" onClick={toggle}>
                        Page3
                    </SidebarLink>
                    <SidebarLink to="Page4" onClick={toggle}>
                        Page4
                    </SidebarLink>
                </SidebarMenu>


            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
