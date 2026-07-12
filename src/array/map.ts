// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// Map Implementation
export function map<T, U>(
  items: readonly T[],
  transform: (item: T, index: number) => U): U[] {
  const result: U[] = []

  for (let index = 0; index < items.length; index++) {

    const item = items[index]!

    result.push(transform(item, index))
  }
  return result
}
/*
//Map usage
const names = ["Rohit", "Samar", "Samir"]
const upperNames = map(names, (name) => name.toUpperCase())
console.log(upperNames)
*/
