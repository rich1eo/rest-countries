import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';

import { CountriesItemType } from '../../types/types';
import { formatPopulation } from '../../utils/utils';

const StyledCountryItem = styled.section`
  display: flex;
  align-items: center;
  gap: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Img = styled.img`
  max-width: 80rem;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 3.2rem;

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

const Border = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;

  & span {
    font-weight: 800;
  }
`;

const DetailsList = styled.ul`
  columns: 2;

  & strong {
    margin-right: 0.6rem;
  }

  & li:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    columns: 1;
  }
`;

interface CountryItemProps {
  country: CountriesItemType;
}

export default function CountryItem({ country }: CountryItemProps) {
  const navigate = useNavigate();

  const curKey = Object.keys(country.currencies)[0];
  const lang = [];

  for (const key in country.languages) {
    lang.push(country.languages[key]);
  }

  return (
    <StyledCountryItem>
      <Img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      <DetailsContainer>
        <Heading>{country.name.common}</Heading>
        <DetailsList>
          <li>
            <strong>Native Name:</strong> {country.name.common}
          </li>
          <li>
            <strong>Population:</strong> {formatPopulation(country.population)}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Sub region:</strong> {country.subregion}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
          <li>
            <strong>Top level domain:</strong> {country.tld.join(', ')}
          </li>
          <li>
            <strong>Currencies:</strong> {country.currencies[curKey].name}
          </li>
          <li>
            <strong>Languages:</strong> {lang.join(', ')}
          </li>
        </DetailsList>
        {country.borders ? (
          <Border>
            <span>Border Countries:</span>{' '}
            {country.borders.map(border => (
              <Button
                key={border}
                $type="border"
                onClick={() => navigate(`/country/${border}`)}
              >
                {border}
              </Button>
            ))}
          </Border>
        ) : (
          <strong>Country has no borders</strong>
        )}
      </DetailsContainer>
    </StyledCountryItem>
  );
}
