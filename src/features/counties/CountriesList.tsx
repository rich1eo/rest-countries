import { useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';

import { CountriesType } from '../../types/types';

import CountriesItem from './CountriesItem';

const StyledCountriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 7rem;

  margin-top: 2.5rem;
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
