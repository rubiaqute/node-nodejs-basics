import path from "path";
import fs from "fs";
import { ERROR_MESSAGE, _dirname } from "./utils.js";

const read = async () => {
  const pathToFile = path.resolve(_dirname, "files", 'fileToRead.txt');

  fs.access(pathToFile, async (error) => {
    if (error) {
        throw Error(ERROR_MESSAGE);
    } else {
        const fileContent = await fs.promises.readFile(pathToFile, {
          encoding: "utf8",
        });
        console.log(fileContent);
    }
  });
};

await read();
