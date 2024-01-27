import path from "path";
import fs from "fs";
import url from "url";
import crypto from "crypto";

const calculateHash = async () => {
    const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.resolve(_dirname, "files", 'fileToCalculateHashFor.txt');

  fs.access(pathToFile, async (error) => {
    if (error) {
        throw Error("No such file");
    } else {
        const hash = crypto.createHash("sha256");
        const inputFile = fs.createReadStream(pathToFile);
        
        inputFile.on("readable", () => {
          const data = inputFile.read();
          if (data) {
            hash.update(data);
          } else {
            console.log(hash.digest("hex"));
          }
        });
    }})


};

await calculateHash();
