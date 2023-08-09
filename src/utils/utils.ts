export function formatPopulation(population: number) {
  return new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
    population
  );
}
