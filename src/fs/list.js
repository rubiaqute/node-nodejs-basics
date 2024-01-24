import path from "path";
import fs from "fs";
import { ERROR_MESSAGE, _dirname } from "./utils.js";

const list = async () => {
  const pathToFolder = path.resolve(_dirname, 'files');
  fs.access(pathToFolder, (error)=>{
    if (error) {
        throw Error(ERROR_MESSAGE);
    } else {
        fs.readdir(pathToFolder, { withFileTypes: true }, (error, files) => {
          const fileNames = files.map((file) => file.name);
          console.log(fileNames);
        });
    }
  });
};

await list();
