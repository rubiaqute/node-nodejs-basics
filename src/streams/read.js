import path from "path";
import fs from "fs";
import url from "url";

const read = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const pathToFile = path.resolve(
    _dirname,
    "files",
    "fileToRead.txt"
  );

  fs.access(pathToFile, async (error) => {
    if (error) {
      throw Error("No such file");
    } else {
      const inputStream = fs.createReadStream(pathToFile);
      inputStream.pipe(process.stdout);
    }
  });
};

await read();
