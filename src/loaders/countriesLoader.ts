import { getCountries } from '../services/apiCountries';

export async function countriesLoader({ request }: { request: Request }) {
  const filterBy = new URL(request.url).searchParams.get('filterBy');
  const data = await getCountries(filterBy);
  return data;
}
