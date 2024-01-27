import * as childProcess from "child_process";
import path from "path";
import * as url from "url";
import { stdout, stdin } from "process";

export const spawnChildProcess = async (args) => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "files", "script.js");

  const child = childProcess.spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);

};

spawnChildProcess([45, 67]);
