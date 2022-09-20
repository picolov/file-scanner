const scanner = require("./scanner");

test("Scan folder containing 0 file", () => {
  expect(scanner.scan("../dummy/test0")).toStrictEqual({
    totalFile: 0,
    totalLine: 0,
  });
});

test("Scan folder containing 1 file", () => {
  expect(scanner.scan("../dummy/test1")).toStrictEqual({
    totalFile: 1,
    totalLine: 2,
  });
});

test("Scan folder containing 100 files", () => {
  expect(scanner.scan("../dummy/test2")).toStrictEqual({
    totalFile: 100,
    totalLine: 200,
  });
});
