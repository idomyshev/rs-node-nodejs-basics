import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedData = chunk.toString().split("").reverse().join("");
      this.push(transformedData);
      callback();
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
