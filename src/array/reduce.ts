// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// reduce Implementation
function reduce<T, R>(
  items: readonly T[],
  initialValue: R,
  reducerArrowCallback: (acculumator: R, item: T, index: number) => R
): R {
  let accumulator = initialValue

  for (let index = 0; index < items.length; index++) {
    const item = items[index]! // Sure
    accumulator = reducerArrowCallback(accumulator, item, index)
  }
  return accumulator
}

/*
// reduce Usage
const numbers = [10, 20, 30, 40, 50]
const sum = reduce(numbers, 0, (total, number) => total + number)
console.log(`Sum of ${numbers}: ${sum}`)
*/
