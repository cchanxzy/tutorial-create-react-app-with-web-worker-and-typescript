/**
 * This is an intentionally a useless and terrible function.
 */
export function processData(size: number): number {
  const obj: Record<number, number> = {};

  for (let i = 0; i < size + 1_000_000; i++) {
    obj[i] = i;
  }

  return Object.keys(obj).length;
}
