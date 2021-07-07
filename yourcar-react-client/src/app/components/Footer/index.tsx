import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Logo } from '../Logo';

const FooterContainer = styled.div`
  background-color: #1d2124;

  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    pb-1
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    h-full
    max-w-screen-xl
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-xl
    justify-center
    md:justify-start
    mt-7
    md:mt-5
  `}
`;

const CopyrightText = styled.small`
  font-size: 12px;

  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `}
`;

const AboutText = styled.div`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-xs
      text-white
      transition-all
      hover:text-gray-200
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
    mb-7
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' bgColor='dark' />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Out Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#1'>Home</a>
            </ListItem>
            <ListItem>
              <a href='#2'>About Us</a>
            </ListItem>
            <ListItem>
              <a href='#3'>Services</a>
            </ListItem>
            <ListItem>
              <a href='#4'>Models</a>
            </ListItem>
            <ListItem>
              <a href='#5'>Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#6'>FAQ</a>
            </ListItem>
            <ListItem>
              <a href='#7'>Contact Us</a>
            </ListItem>
            <ListItem>
              <a href='#8'>Support</a>
            </ListItem>
            <ListItem>
              <a href='#9'>Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href='#10'>Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+1 123-456-7890</SmallText>
          </HorizontalContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};
