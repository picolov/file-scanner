const scanner = require("./scanner");

test("Scan folder containing 0 file", () => {
  expect(scanner.scan("../dummy/test0")).toStrictEqual({
    totalTestFile: 0,
    totalTestLoc: 0,
    totalSourceFile: 0,
    totalSourceLoc: 0,
  });
});

test("Scan folder containing 1 file", () => {
  expect(scanner.scan("../dummy/test1")).toStrictEqual({
    totalTestFile: 1,
    totalTestLoc: 2,
    totalSourceFile: 1,
    totalSourceLoc: 2,
  });
});

test("Scan folder containing 100 dummy files, 1 test file, and 10 source file", () => {
  expect(scanner.scan("../dummy/test2")).toStrictEqual({
    totalTestFile: 1,
    totalTestLoc: 2,
    totalSourceFile: 10,
    totalSourceLoc: 20,
  });
});
