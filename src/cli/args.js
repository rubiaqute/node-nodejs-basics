const parseArgs = () => {
      const args = process.argv.slice(2);
      
      const resultList = args.reduce((acc, arg, index) => {
        if (/^--*/.test(arg) && args[index + 1]) {
          acc.push(`${arg.slice(2)} is ${args[index + 1]}`);
        }
        return acc
      }, []);

      console.log(resultList.join(", "));
};

parseArgs();