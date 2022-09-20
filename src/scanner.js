const path = require("path");
const fs = require("fs");

const scan = (filepath) => {
  const testFolder = path.join(__dirname, filepath);
  const filenames = fs.readdirSync(testFolder);

  return filenames;
};

module.exports = {
  scan,
};
