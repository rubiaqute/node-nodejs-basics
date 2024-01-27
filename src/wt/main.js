import { Worker } from "worker_threads";
import path from "path";
import * as url from "url";
import * as os from "os";

const performCalculations = async () => {
    const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.resolve(_dirname, "worker.js");
    const numberOfThreads = os.cpus().length;
    const workers = [];

    new Array(numberOfThreads).fill(0).forEach(async (thread, index)=> {
        const worker = new Worker(filePath, { workerData: 10 + index });

        workers.push(
        new Promise((resolve) => {
          worker.on("message", (msg) =>
            resolve({ status: "resolved", data: msg })
          );
          worker.on("error", () => resolve({ status: "error", data: null }));
        })
      );
    })

    const resultArray = await Promise.allSettled(workers);
    console.log(resultArray);
};

await performCalculations();
