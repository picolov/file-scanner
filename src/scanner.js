const testFolder = "../dummy";
const fs = require("fs");

const scan = () => {
  const arrayOfFile = [];
  fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
      arrayOfFile.push(file);
    });
  });
  return arrayOfFile;
};
export default scan;
