import { access, rename as renameFile } from "fs/promises";
import { getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const rename = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const sourceFilePath = `${dirPath}/files/wrongFilename.txt`;
  const targetFilePath = `${dirPath}/files/properFilename.md`;

  if (await access(targetFilePath)) {
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
