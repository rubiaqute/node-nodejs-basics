import path from "path";
import fs from "fs";
import { ERROR_MESSAGE, _dirname } from "./utils.js";

const remove = async () => {
  const pathToDeleteFile = path.resolve(
    _dirname,
    "files",
    "fileToRemove.txt"
  );

    fs.access(pathToDeleteFile, (error) => {
        if (error) {
            throw Error(ERROR_MESSAGE);
        } else {
            fs.promises.unlink(pathToDeleteFile)
        }
    })
};

await remove();
