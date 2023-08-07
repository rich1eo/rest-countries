import { styled } from 'styled-components';

import Input from '../../ui/Input';
import FilterBy from '../../ui/FilterBy';

const StyledCountriesActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export default function CountriesActions() {
  return (
    <StyledCountriesActions>
      <Input placeholder="Search for a country..." />
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
