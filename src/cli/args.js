const parseArgs = () => {
  const args = process.argv.slice(2);
  const resultArray = [];

  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      resultArray.push(`${arg.substring(2, arg.length)} is ${args[index + 1]}`);
    }
  });

  console.log(resultArray.join(", "));
};

parseArgs();
