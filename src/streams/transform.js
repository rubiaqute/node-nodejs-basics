import { Transform, pipeline } from "stream";

const transform = async () => {
   class myTransform extends Transform {
     constructor(options = {}) {
       super(options);
     }
     _transform(chunk, enc, callback) {
       const newChunk = chunk.toString().split("").reverse().join("");
       this.push(newChunk);
       callback();
     }
   }

   const transformStream = new myTransform();
   pipeline(process.stdin, transformStream, process.stdout, ()=>{});
};

await transform();
