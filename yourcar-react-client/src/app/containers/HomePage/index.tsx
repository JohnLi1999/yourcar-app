import styled from 'styled-components';
import tw from 'twin.macro';

import { BookCard } from '../../components/BookCard';
import { Marginer } from '../../components/Marginer';
import { Navbar } from '../../components/Navbar';
import { AboutUs } from './AboutUs';
import { BookingSteps } from './BookingSteps';
import { TopSection } from './TopSection';
import { TopCars } from './TopCars';
import { Footer } from '../../components/Footer';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
      <Footer />
    </PageContainer>
  );
};
