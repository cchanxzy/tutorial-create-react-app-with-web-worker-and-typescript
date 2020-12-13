import { processData } from '../processData';

export function processDataWithWebWorker(size: number): number {
  return processData(size);
}
