import { CountriesItemType, CountriesType } from '../types/types';

const URL_API = 'https://restcountries.com/v3.1';

export async function getCountries(
  region: string | null,
  searchQuery: string | null
) {
  if (region) {
    const res = await fetch(`${URL_API}/region/${region}`);
    if (!res)
      throw new Error(
        'Something went wrong during fetching countries by region'
      );

    const data: CountriesType = await res.json();
    return data;
  } else if (searchQuery) {
    const res = await fetch(`${URL_API}/name/${searchQuery}`);
    if (!res)
      throw new Error(
        'Something went wrong during fetching countries by search query'
      );

    const data: CountriesType = await res.json();
    return data;
  } else {
    const res = await fetch(`${URL_API}/all`);
    if (!res) throw new Error('Something went wrong during fetching countries');

    const data: CountriesType = await res.json();
    return data;
  }
}

export async function getCountry(countryName: string) {
  const res = await fetch(`${URL_API}/name/${countryName}`);
  if (!res) throw new Error('Something went wrong during fetching country');

  const data: CountriesItemType[] = await res.json();

  if (data[0].borders) {
    const borders = [];
    for (const border of data[0].borders) {
      const borderNameRes = await fetch(
        `${URL_API}/alpha/${border}?fields=name`
      );

      if (!borderNameRes)
        throw new Error('Something went wrong during fetching country');

      const borderName = await borderNameRes.json();
      borders.push(borderName.name.common);
    }

    data[0].borders = borders;
  }

  return data[0];
}
