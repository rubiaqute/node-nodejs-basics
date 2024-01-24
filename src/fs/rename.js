import path from "path";
import url from "url";
import fs from "fs";
import { ERROR_MESSAGE } from "./utils.js";


const rename = async () => {
    const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToOriginalFile = path.resolve(
      _dirname,
      "files",
      "wrongFilename.txt"
    );

    const pathToNewFile = path.resolve(_dirname, "files", "properFilename.md");

    fs.access(pathToOriginalFile, (error) => {
      if (error) {
        throw Error(ERROR_MESSAGE);
      } else {

        fs.access(pathToNewFile, (error) => {
          if (error) {
            
            fs.promises.rename(pathToOriginalFile, pathToNewFile);
          } else {
           throw Error(ERROR_MESSAGE);
          }
        });
      }
    });
};

await rename();
