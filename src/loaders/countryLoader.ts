import { LoaderFunctionArgs } from 'react-router-dom';

import { getCountry } from '../services/apiCountries';

export async function countryLoader({ params }: LoaderFunctionArgs) {
  if (!params.countryName) return null;
  const data = await getCountry(params.countryName);
  return data;
}
