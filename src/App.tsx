import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Worker from "./worker";
import { processData } from "./processData";

// Create new instance
const instance = new Worker();

function App() {
  const [processingStatus, setProcessingStatus] = useState(false);
  const [itemSize, setItemSize] = useState<number>(0);
  const [count, setCount] = useState(0);

  const onCount = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setItemSize(0);
    setCount(0);
  };

  const onClick = async () => {
    const t0 = performance.now();
    setProcessingStatus(true);

    // Use a web worker to process the itemSize
    //const newArrSize = await instance.processDataWithWebWorker(itemSize);

    const newArrSize = await instance.startExpress();

    setItemSize(newArrSize);
    setProcessingStatus(false);
    const t1 = performance.now();
    console.log(`Web worker took ${Math.floor(t1 - t0)} milliseconds.`);
  };

  const onClickMainThread = () => {
    const t0 = performance.now();
    setProcessingStatus(true);

    // Use main thread to process the itemSize
    const newArrSize = processData(itemSize);

    setItemSize(newArrSize);
    setProcessingStatus(false);
    const t1 = performance.now();
    console.log(`Main thread took ${Math.floor(t1 - t0)} milliseconds.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <p>
          This is a completely artificial example to compare using a web worker
          and the main thread for processing something intensive that may hang
          the UI.
        </p>
        <p>
          Warning: You may ran out of memory depending on your PC specs, so be
          careful!
        </p>
        <p>The count button is there to test the UI is still responsive.</p>

        <p>
          <button onClick={onCount}>Count</button>
          Count: {count}
        </p>
        <div>
          <button onClick={onClick} disabled={processingStatus}>
            Click to process with web worker
          </button>
          <button onClick={onClickMainThread} disabled={processingStatus}>
            Click to process on main thread
          </button>
        </div>
        <p>Processing status: {processingStatus ? "PROCESSING" : "IDLE"}</p>
        <p>Number of items: {itemSize}</p>
        <div>
          <button onClick={onReset} disabled={processingStatus}>
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
