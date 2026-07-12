// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// Filter Implementation
function filter<T>(
  items: T[],
  keepit: (item: T, index: number) => boolean): T[] {
  const result: T[] = []
  for (let index = 0; index < items.length; index++) {
    if (keepit(items[index], index))
      result.push(items[index])
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
