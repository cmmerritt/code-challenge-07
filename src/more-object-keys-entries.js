export function getHouses(object) {
  const arr = Object.values(object);
  const houses = arr.map(x => x.house);
  return houses;
}

export function updateNumbers(obj) {
  return Object.keys(obj).map((key) => (key + ': ' + obj[key]));
}