declare module 'comlink-loader!*' {
  class WebpackWorker extends Worker {
    constructor();

    // Add any custom functions to this class.
    // Make note that the return type needs to be wrapped in a promise.
    processDataWithWebWorker(data: Array<String>): Promise<Array<string>>;
  }

  export = WebpackWorker;
}
