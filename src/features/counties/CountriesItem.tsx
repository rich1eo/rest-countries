import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { CountriesItemType } from '../../types/types';
import { formatPopulation } from '../../utils/utils';

const StyledLink = styled(Link)`
  display: grid;
`;

const StyledCountriesItem = styled.div`
  background-color: var(--color-el);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  cursor: pointer;
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
    <StyledLink to={`/country/${country.name.common}`}>
      <StyledCountriesItem>
        <Flag src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        <InfoContainter>
          <Heading>{country.name.common}</Heading>
          <DetailsList>
            <li>
              <strong>Population:</strong>{' '}
              {formatPopulation(country.population)}
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
    </StyledLink>
  );
}
