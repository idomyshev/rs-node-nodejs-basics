import { cp } from "fs/promises";
import { getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const copy = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);
  const sourceDirPath = `${dirPath}/files`;
  const targetDirPath = `${dirPath}/files_copy`;

  try {
    await cp(sourceDirPath, targetDirPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    if (["ENOENT", "ERR_FS_CP_EEXIST"].includes(err?.code)) {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await copy();
