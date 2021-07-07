import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import MoonLoader from 'react-spinners/MoonLoader';

import { Car } from '../../components/Car';
import carsService from '../../services/carsService';
import { GetCars_cars } from '../../services/carsService/__generated__/GetCars';
import { makeSelectTopCars } from './selectors';
import { setTopCars } from './slice';

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-xl
    w-full
    flex
    flex-col
    items-center
    justify-center
    pl-4
    pr-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export const TopCars = () => {
  const [isLoading, setLoading] = useState(false);

  const { topCars } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopCars = async () => {
      setLoading(true);

      const cars = await carsService.getCars().catch((err) => {
        console.log('Error: ', err);
      });

      const { setTopCars } = actionDispatch(dispatch);
      if (cars) {
        setTopCars(cars);
      }

      setLoading(false);
    };

    fetchTopCars();
  }, [dispatch]);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars =
    (!isEmptyTopCars && topCars.map((car) => <Car key={car.id} {...car} />)) ||
    [];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
  ];

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={30} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel isRTL={false} breakPoints={breakPoints}>
            {cars}
          </Carousel>
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
};
