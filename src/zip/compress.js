import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { generatePath, getCurrentDirPath } from "../utils/index.js";

const compress = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const sourceFilePath = generatePath(dirPath, "files/fileToCompress.txt");
  const targetFilePath = generatePath(dirPath, "files/archive.gz");

  const readableStream = createReadStream(sourceFilePath);

  const gzipStream = zlib.createGzip();

  const writableStream = createWriteStream(targetFilePath);

  readableStream.pipe(gzipStream).pipe(writableStream);
};

await compress();
