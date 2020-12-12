import { processData } from '../processData';

export function processDataWithWebWorker(data: Array<string>): Array<string> {
  return processData(data);
}
