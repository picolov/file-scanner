const scanner = require("./scanner");

test("Scan folder content", () => {
  expect(scanner.scan().toBe(["dummy.txt"]));
});
