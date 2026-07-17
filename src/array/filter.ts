// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// filter Implementation
export function filter<T>(
  items: readonly T[],
  shouldKeep: (item: T, index: number) => boolean): T[] {
  const result: T[] = []
  for (let index = 0; index < items.length; index++) {

    const item = items[index]! // Sure

    if (shouldKeep(item, index)) {
      result.push(item)
    }
  }
  return result
}
