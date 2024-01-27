import path from "path";
import fs from "fs";
import { pipeline } from "stream/promises";
import zlib from "zlib";
import url from "url";

const decompress = async () => {
      const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
      const pathToOriginalFile = path.resolve(
        _dirname,
        "files",
        "fileToCompress.txt"
      );
      const pathToArchiveFile = path.resolve(_dirname, "files", "archive.gz");

      fs.access(pathToArchiveFile, async (error) => {
        if (error) {
          throw Error("No such file");
        } else {
          await pipeline(
            fs.createReadStream(pathToArchiveFile),
            zlib.createUnzip(),
            fs.createWriteStream(pathToOriginalFile)
          );
        }
      });
};

await decompress();
