const scanner = require("./scanner");

test("Scan folder containing 0 file", () => {
  expect(scanner.scan("../dummy/test0")).toStrictEqual({
    totalTestFile: 0,
    totalTestLoc: 0,
    totalSourceFile: 0,
    totalSourceLoc: 0,
    ratio: 0,
  });
});

test("Scan folder containing 1 file", () => {
  expect(scanner.scan("../dummy/test1")).toStrictEqual({
    totalTestFile: 1,
    totalTestLoc: 2,
    totalSourceFile: 1,
    totalSourceLoc: 2,
    ratio: 1,
  });
});

test("Scan folder containing 100 dummy files, 1 test file, and 10 source file", () => {
  expect(scanner.scan("../dummy/test2")).toStrictEqual({
    totalTestFile: 1,
    totalTestLoc: 2,
    totalSourceFile: 10,
    totalSourceLoc: 20,
    ratio: 0.1,
  });
});

test("Scan folder containing 2 dummy files, 4 test file, and 4 source file in nested folder", () => {
  expect(scanner.scan("../dummy/test3_nested")).toStrictEqual({
    totalTestFile: 4,
    totalTestLoc: 8,
    totalSourceFile: 4,
    totalSourceLoc: 8,
    ratio: 1,
  });
});

test("Scan ms transfer", () => {
  expect(scanner.scan("../../../ms/ms-transfer")).toStrictEqual({
    totalTestFile: 149,
    totalTestLoc: 48566,
    totalSourceFile: 374,
    totalSourceLoc: 37866,
    ratio: 1.2825753974541805,
  });
});

test("Scan ms payment instruction", () => {
  expect(scanner.scan("../../../ms/ms-payment-instruction")).toStrictEqual({
    totalTestFile: 149,
    totalTestLoc: 48566,
    totalSourceFile: 374,
    totalSourceLoc: 37866,
    ratio: 1.2825753974541805,
  });
});
