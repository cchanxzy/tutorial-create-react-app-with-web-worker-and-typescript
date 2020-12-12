import { processData } from '../processData';
/**
 * This is a intentionally terrible function.
 * It will add million items to the array each time.
 */
export function processDataWithWebWorker(data: Array<string>): Array<string> {
  return processData(data);
}
