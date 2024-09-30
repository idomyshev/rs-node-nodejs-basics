const parseEnv = () => {
  const matchPrefix = "RSS_";
  const resultArray = [];

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith(matchPrefix)) {
      resultArray.push(`${key}=${value}`);
    }
  });

  console.log(resultArray.join("; "));
};

parseEnv();
