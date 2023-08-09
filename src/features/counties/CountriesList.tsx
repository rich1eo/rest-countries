import { useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';

import CountriesItem from './CountriesItem';

import { CountriesType } from '../../types/types';

const StyledCountriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 7rem;

  margin-top: 2.5rem;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default function CountriesList() {
  const data = useLoaderData() as CountriesType;

  return (
    <StyledCountriesList>
      {data.map(country => (
        <CountriesItem key={country.name.common} country={country} />
      ))}
    </StyledCountriesList>
  );
}
