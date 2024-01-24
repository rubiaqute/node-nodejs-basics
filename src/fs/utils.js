import url from "url";
import path from "path";

export const fsErrorCallback = (error) => {
  if (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

export const ERROR_MESSAGE = "FS operation failed";
export const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
