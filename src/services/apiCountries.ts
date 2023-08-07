import { CountriesType } from '../types/types';

const URL_API = 'https://restcountries.com/v3.1';

export async function getCountries(region: string | null) {
  if (!region) {
    const res = await fetch(`${URL_API}/all`);
    if (!res) throw new Error('Something went wrong during fetching countries');

    const data: CountriesType = await res.json();
    return data;
  } else {
    const res = await fetch(`${URL_API}/region/${region}`);
    if (!res)
      throw new Error(
        'Something went wrong during fetching countries by region'
      );

    const data: CountriesType = await res.json();
    return data;
  }
}
