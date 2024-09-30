import { readFile } from "fs/promises";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const read = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);
  const file = generatePath(dirPath, "files/fileToRead.txt");

  try {
    const data = await readFile(file, "utf8");
    console.log(data);
  } catch (err) {
    if (err?.code === "ENOENT") {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await read();
