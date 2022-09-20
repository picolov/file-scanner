const path = require("path");
const fs = require("fs");

const scan = (filepath) => {
  const folderPath = path.join(__dirname, filepath);
  const filenames = fs.readdirSync(folderPath);
  let lineCount = 0;
  filenames.map((fileName) => {
    const content = fs.readFileSync(path.join(folderPath, fileName), "utf8");
    lineCount += content.split("\r\n").length;
    return lineCount;
  });

  return {
    totalFile: filenames.length,
    totalLine: lineCount,
  };
};

module.exports = {
  scan,
};
