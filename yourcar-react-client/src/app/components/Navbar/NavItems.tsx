import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
      `}
    `}
`;

export const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href='#1'>Home</a>
          </NavItem>
          <NavItem menu>
            <a href='#2'>Cars</a>
          </NavItem>
          <NavItem menu>
            <a href='#3'>Services</a>
          </NavItem>
          <NavItem menu>
            <a href='#4'>Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <a href='#1'>Home</a>
      </NavItem>
      <NavItem>
        <a href='#2'>Cars</a>
      </NavItem>
      <NavItem>
        <a href='#3'>Services</a>
      </NavItem>
      <NavItem>
        <a href='#4'>Contact Us</a>
      </NavItem>
    </ListContainer>
  );
};
