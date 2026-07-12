// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// Map Implementation
function map<T, U>(
  items: T[],
  transform: (item: T, index: number) => U): U[] {
  const result: U[] = []

  for (let index = 0; index < items.length; index++) {
    result.push(transform(items[index], index))
  }
  return result
}
/*
//Map usage
const names = ["Rohit", "Samar", "Samir"]
const upperNames = map(names, (name) => name.toUpperCase())
console.log(upperNames)
*/
