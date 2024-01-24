import path from "path";
import fs  from "fs";
import { fsErrorCallback, ERROR_MESSAGE, _dirname } from "./utils.js";

const copy = async () => {
      const pathToOriginalFolder = path.resolve(_dirname, "files");
      const pathToCopyFolder = path.resolve(_dirname, "files_copy");

      fs.access(pathToOriginalFolder, (error) => {
        if (error) {
            throw Error(ERROR_MESSAGE);
        } else {
            fs.mkdir(pathToCopyFolder, (error) => {
                if (error) {
                    throw Error(ERROR_MESSAGE);
                } else {
                    copyFiles()
                }
            });
        }
      });

      const copyFiles = () =>
        fs.promises.cp(
          pathToOriginalFolder,
          pathToCopyFolder,
          {
            recursive: true,
          },
          fsErrorCallback
        );
};


await copy();
