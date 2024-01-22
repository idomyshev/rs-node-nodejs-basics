import { unlink } from "fs/promises";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const remove = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filePath = generatePath(dirPath, "files/fileToRemove.txt");

  try {
    await unlink(filePath);
  } catch (err) {
    if (err?.code === "ENOENT") {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await remove();
