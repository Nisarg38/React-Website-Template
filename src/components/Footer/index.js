import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLink,
  FooterLinkTitle,
  FooterImg,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Let's be internet BFFs</FooterLinkTitle>
              <FooterImg>
                <FooterLink to="/">Github</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">LinkedIn</FooterLink>
              </FooterImg>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
