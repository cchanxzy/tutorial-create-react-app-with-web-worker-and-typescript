import { processData } from "../processData";
import { app } from "./server";

export function processDataWithWebWorker(size: number): number {
  return processData(size);
}

export function startExpress() {
  const listener = app.listen(3001, () => {
    console.log(
      "❇️ Express server is running on port",
      listener.address().port
    );
  });

  return 3001;
}
