import { readdir } from "fs/promises";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const list = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filesDirPath = generatePath(dirPath, "files");

  try {
    const files = await readdir(filesDirPath);

    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    if (err?.code === "ENOENT") {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await list();
