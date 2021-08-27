import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  Logo,
  Contact,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import logo from "./Logo.svg";
import sayhello from "./sayhello.svg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setscrollNav(true);
    else setscrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scroll={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo src={logo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="Page1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                My Work
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Page2">About Me</NavLinks>
            </NavItems>
            <NavItems to="/" onClick={toggleHome}>
              <NavLinks>
                <Contact src={sayhello} alt="" />
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
