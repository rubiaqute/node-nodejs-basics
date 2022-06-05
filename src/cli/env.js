export const parseEnv = () => {
  const result = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if (/^RSS_*/.test(key)) {
      const item = `${key}=${value}`;
      result.push(item);
    }
  });
  console.log(result.join("; "));
};
parseEnv();
