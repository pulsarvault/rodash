// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// forEach Implemeantation
export function forEach<T>(
  items: readonly T[],
  callback: (item: T, index: number) => void
): void {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]! // Sure
    callback(item, index)
  }
}
