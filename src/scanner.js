const path = require("path");
const fs = require("fs");

let result = {
  totalTestFile: 0,
  totalTestLoc: 0,
  totalSourceFile: 0,
  totalSourceLoc: 0,
};

const walk = (folderPath) => {
  const filenames = fs.readdirSync(folderPath, { withFileTypes: true });

  filenames.forEach((filename) => {
    if (filename.isDirectory()) {
      walk(path.join(folderPath, filename.name));
    } else {
      if (filename.name.endsWith(".spec.ts")) {
        result.totalTestFile += 1;
        const content = fs.readFileSync(
          path.join(folderPath, filename.name),
          "utf8"
        );
        result.totalTestLoc += content.split("\r\n").length;
      } else if (filename.name.endsWith(".ts")) {
        result.totalSourceFile += 1;
        const content = fs.readFileSync(
          path.join(folderPath, filename.name),
          "utf8"
        );
        result.totalSourceLoc += content.split("\r\n").length;
      }
    }
  });
};

const scan = (filepath) => {
  console.log(`You are scanning: ${filepath}`);
  result = {
    totalTestFile: 0,
    totalTestLoc: 0,
    totalSourceFile: 0,
    totalSourceLoc: 0,
  };
  const folderPath = path.join(__dirname, filepath);
  walk(folderPath);

  let ratio = 0;
  if (result.totalTestLoc != 0 && result.totalSourceLoc != 0) {
    ratio = result.totalTestLoc / result.totalSourceLoc;
  }
  result.ratio = ratio;

  console.log(`ratio: ${result.ratio}`);
  return result;
};

module.exports = {
  scan,
};
