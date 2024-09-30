import { availableParallelism } from "os";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);
  const workerScriptPath = generatePath(dirPath, "worker.js");

  const coresNumber = availableParallelism();

  const promises = [];

  for (let i = 0; i <= coresNumber - 1; i++) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(workerScriptPath, { workerData: 10 + i });
      worker.on("message", resolve);
      worker.on("error", () => resolve(null));
    });

    promises.push(promise);
  }

  const results = (await Promise.all(promises)).map((data) => ({
    status: data !== null ? "resolved" : "error",
    data,
  }));

  console.log(results);
};

await performCalculations();
