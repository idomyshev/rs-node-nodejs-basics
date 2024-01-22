import { rename as renameFile, stat } from "fs/promises";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const rename = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const sourceFilePath = generatePath(dirPath, "files/wrongFilename.txt");
  const targetFilePath = generatePath(dirPath, "files/properFilename.md");

  let targetFileExist = false;

  try {
    targetFileExist = await stat(targetFilePath);
    targetFileExist = true;
  } catch (err) {
    // It's correct that we do nothing here.
  }

  if (targetFileExist) {
    throw new Error(fsErrorText);
  }

  try {
    await renameFile(sourceFilePath, targetFilePath);
  } catch (err) {
    if (err?.code === "ENOENT") {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await rename();
