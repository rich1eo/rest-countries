import { getCountries } from '../services/apiCountries';

export async function countriesLoader({ request }: { request: Request }) {
  const filterBy = new URL(request.url).searchParams.get('filterBy');
  const searchQuery = new URL(request.url).searchParams.get('searchQuery');
  const data = await getCountries(filterBy, searchQuery);
  return data;
}
