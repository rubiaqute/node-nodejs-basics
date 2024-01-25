import path from "path";
import fs from "fs";
import url from "url";

const write = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const pathToFile = path.resolve(_dirname, "files", "fileToWrite.txt");

  fs.access(pathToFile, async (error) => {
    if (error) {
      throw Error("No such file");
    } else {
      const outputStream = fs.createWriteStream(pathToFile);
      process.stdin.pipe(outputStream);
    }
  });
};

await write();
