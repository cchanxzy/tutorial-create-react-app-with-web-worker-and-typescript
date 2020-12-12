/**
 * This is a intentionally terrible function.
 * It will add million items to the array each time.
 */
export function processData(data: Array<string>): Array<string> {
  const arr = [];

  for (let i = 0; i < data.length + 1_000_000; i++) {
    arr.push(`${i}`);
  }

  return arr;
}
