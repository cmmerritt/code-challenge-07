export function getHouses(object) {
  const arr = Object.values(object);
  const houses = arr.map(x => x.house);
  return houses;
}