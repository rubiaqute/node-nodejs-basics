import path from "path";
import fs from "fs";
import { fsErrorCallback, _dirname } from "./utils.js";

const create = async () => {
    const pathToFile = path.resolve(_dirname, "files", 'fresh.txt');
    
    fs.writeFile(
      pathToFile,
      "I am fresh and young",
      { flag: "wx" },
      fsErrorCallback
    );
};

await create();