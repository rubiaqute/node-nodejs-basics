const parseEnv = () => {
    const resultList =  Object.entries(process.env).reduce((acc, cur) => {
        const [key, value] = cur

       if (/^RSS_*/.test(key)) {
         const item = `${key}=${value}`;
         acc.push(item);
       }

        return acc;
     }, []);
     
     console.log(resultList.join("; "));
};

parseEnv();