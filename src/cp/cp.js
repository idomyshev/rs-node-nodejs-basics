import { fork } from "child_process";
import { generatePath, getCurrentDirPath } from "../utils/index.js";

const spawnChildProcess = async (args) => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const childFile = generatePath(dirPath, "files/script.js");

  fork(childFile, args);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess([1, 2, "a", "b", 3]);
