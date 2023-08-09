import { useLoaderData } from 'react-router-dom';

import CountryAction from '../features/country/CountryAction';
import CountryItem from '../features/country/CountryItem';

import { CountriesItemType } from '../types/types';

export default function Country() {
  const country = useLoaderData() as CountriesItemType;

  return (
    <div>
      <CountryAction />
      <CountryItem country={country} />
    </div>
  );
}
