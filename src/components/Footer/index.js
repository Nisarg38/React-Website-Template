import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkItem, FooterLink, FooterLinkTitle  } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">Ex 1</FooterLink>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                            <FooterLink to="/">About Us</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>EX 2</FooterLinkTitle>
                            <FooterLink to="/">Ex 1</FooterLink>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                            <FooterLink to="/">About Us</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
