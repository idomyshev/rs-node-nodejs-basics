import { createReadStream } from "fs";
import { generatePath, getCurrentDirPath } from "../utils/index.js";

const read = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filePath = generatePath(dirPath, "files/fileToRead.txt");

  const readableStream = createReadStream(filePath);

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });
};

await read();
