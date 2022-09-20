const path = require("path");
const fs = require("fs");

const scan = (filepath) => {
  const folderPath = path.join(__dirname, filepath);
  const filenames = fs.readdirSync(folderPath);

  const testFiles = [];
  const sourceFiles = [];
  filenames.forEach((filename) => {
    if (filename.endsWith(".test.js")) {
      testFiles.push(filename);
    } else if (filename.endsWith(".js")) {
      sourceFiles.push(filename);
    }
  });

  let testLineCount = 0;
  testFiles.map((fileName) => {
    const content = fs.readFileSync(path.join(folderPath, fileName), "utf8");
    testLineCount += content.split("\r\n").length;
    return testLineCount;
  });

  let sourceLineCount = 0;
  sourceFiles.map((fileName) => {
    const content = fs.readFileSync(path.join(folderPath, fileName), "utf8");
    sourceLineCount += content.split("\r\n").length;
    return sourceLineCount;
  });

  return {
    totalTestFile: testFiles.length,
    totalTestLoc: testLineCount,
    totalSourceFile: sourceFiles.length,
    totalSourceLoc: sourceLineCount,
  };
};

module.exports = {
  scan,
};
