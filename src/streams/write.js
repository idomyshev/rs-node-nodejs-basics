import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { createWriteStream } from "fs";

const write = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filePath = generatePath(dirPath, "files/fileToWrite.txt");

  const writableStream = createWriteStream(filePath);

  process.stdin.pipe(writableStream);
};

await write();
