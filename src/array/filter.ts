// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// Filter Implementation
export function filter<T>(
  items: readonly T[],
  shouldKeep: (item: T, index: number) => boolean): T[] {
  const result: T[] = []
  for (let index = 0; index < items.length; index++) {

    const item = items[index]!

    if (shouldKeep(item, index)) {
      result.push(item)
    }
  }
  return result
}
/*
// Filter usage
const users = [
  { name: "Rohit", active: true },
  { name: "Samar", active: false },
  { name: "Samir", active: false },
];

const activeUsers = filter(users, user => user.active);

console.log(activeUsers);
*/
