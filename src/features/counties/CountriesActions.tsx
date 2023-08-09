import { styled } from 'styled-components';
import { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Input from '../../ui/Input';
import FilterBy from '../../ui/FilterBy';

const StyledCountriesActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
`;

export default function CountriesActions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    searchParams.delete('filterBy');
    searchParams.set('searchQuery', searchQuery);
    setSearchParams(searchParams);
  }

  return (
    <StyledCountriesActions>
      <form onSubmit={handleSearch}>
        <Input
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
      </form>

      <FilterBy
        options={[
          { value: 'all', label: 'All' },
          { value: 'africa', label: 'Africa' },
          { value: 'america', label: 'America' },
          { value: 'asia', label: 'Asia' },
          { value: 'europe', label: 'Europe' },
          { value: 'oceania', label: 'Oceania' },
        ]}
      />
    </StyledCountriesActions>
  );
}
