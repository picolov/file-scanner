const scan = require("./scanner");

test("Scan folder content", () => {
  expect((scan()).toBe(["dummy.txt"]));
});
