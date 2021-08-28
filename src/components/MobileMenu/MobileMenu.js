/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content aria-label="Menu">
                <CloseButton onClick={onDismiss}>
                    <Icon id="close" />
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </Footer>
            </Content>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
  background: rgba(96, 100, 108, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Content = styled(DialogContent)`
  width: 300px;
  background: var(--color-white);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 32px;
  align-items: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NavLink = styled.a`
  font-size: ${18/16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  line-height: 21px;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  font-size: ${14/16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-normal);
`;

export default MobileMenu;
