import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IOption } from '../types/types';

import Select from './Select';

interface FilterByProps {
  options: IOption[];
}

export default function FilterBy({ options }: FilterByProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === 'all') {
      searchParams.delete('filterBy');
      setSearchParams(searchParams);
    } else {
      searchParams.set('filterBy', event.target.value);
      setSearchParams(searchParams);
    }
  }

  return (
    <Select
      value={searchParams.get('filterBy') || ''}
      options={options}
      onChange={handleChange}
    />
  );
}
