import { styled } from 'styled-components';

import { CountriesItemType } from '../../types/types';

const StyledCountriesItem = styled.div`
  background-color: var(--color-el);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

const Flag = styled.img`
  width: 100%;
  height: 45%;
`;

const InfoContainter = styled.div`
  padding: 2.2rem;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

interface CountriesItemProps {
  country: CountriesItemType;
}

export default function CountriesItem({ country }: CountriesItemProps) {
  return (
    <StyledCountriesItem>
      <Flag src={country.flags.png} alt={country.flags.alt} />
      <InfoContainter>
        <Heading>{country.name.common}</Heading>
        <DetailsList>
          <li>
            <strong>Population:</strong>{' '}
            {new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
              country.population
            )}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </DetailsList>
      </InfoContainter>
    </StyledCountriesItem>
  );
}
