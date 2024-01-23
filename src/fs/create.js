import path from "path";
import url from "url";
import fs from "fs";
import { fsErrorCallback } from './utils.js'

const create = async () => {
    const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.resolve(_dirname, "files", 'fresh.txt');
    
    fs.writeFile(
      pathToFile,
      "I am fresh and young",
      { flag: "wx" },
      fsErrorCallback
    );
};

await create();