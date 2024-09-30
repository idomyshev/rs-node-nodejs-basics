import { fileURLToPath } from "url";
import { dirname, sep } from "path";

export const getCurrentDirPath = (url) => {
  const filePath = fileURLToPath(url);
  return dirname(filePath);
};

export const generatePath = (...pathParts) => {
  return pathParts.join(sep);
};
