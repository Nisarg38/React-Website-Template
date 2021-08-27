import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #1a1919;
  height: 11vh;
  width: 100vw;
  display: flex;
  justifycontent: "center";
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.4s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justifycontent: "center";
  height: 10vh;
  z-index: 1;
  width: 100vw;
  max-width: 100vw;

  @media screen and (min-width: 960px) {
    transition: 0.2s all ease;
    margin-left: 5.5rem;
    margin-right: 5.5rem;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50vw;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1vw;
  &.active {
    border-bottom: 3px solid #de253e;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-left: 13rem;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-direction: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Logo = styled.img`
  height: 6vh;
  width: 6vw;
  margin-left: 3.5vw;
`;

export const Contact = styled.img`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100px;
`;
