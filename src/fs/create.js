import { writeFile } from "fs/promises";
import { generatePath, getCurrentDirPath } from "../utils/index.js";
import { fsErrorText } from "../settings/index.js";

const create = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filePath = generatePath(dirPath, "files/fresh.txt");

  const content = "I am fresh and young";

  try {
    await writeFile(filePath, content, { flag: "wx" });
  } catch (err) {
    if (err?.code === "EEXIST") {
      // Here we can specify more precise error text instead of common one.
      throw new Error(fsErrorText);
    }

    throw new Error(fsErrorText);
  }
};

await create();
