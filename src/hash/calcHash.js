import { readFile } from "fs/promises";
import crypto from "crypto";
import { generatePath, getCurrentDirPath } from "../utils/index.js";

const calculateHash = async () => {
  const dirPath = getCurrentDirPath(import.meta.url);

  const filePath = generatePath(dirPath, "files/fileToCalculateHashFor.txt");

  const data = await readFile(filePath);

  const hashHex = crypto.createHash("sha256").update(data).digest("hex");

  process.stdout.write(`${hashHex}\n`);
};

await calculateHash();
