import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { generatePath, getCurrentDirPath } from "../utils/index.js";

const decompress = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const sourceFilePath = generatePath(dirPath, "files/archive.gz");
  const targetFilePath = generatePath(dirPath, "files/fileToCompress.txt");

  const readableStream = createReadStream(sourceFilePath);

  const gunzipStream = zlib.createGunzip();

  const writableStream = createWriteStream(targetFilePath);

  readableStream.pipe(gunzipStream).pipe(writableStream);
};

await decompress();
