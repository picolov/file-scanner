const scan = require("./scanner");

test("Scan folder containing 0 file", () => {
  expect(JSON.stringify(scanner.scan("../dummy/test0"))).toStrictEqual(
    JSON.stringify([])
  );
});

test("Scan folder containing 1 file", () => {
  expect(JSON.stringify(scanner.scan("../dummy/test1"))).toStrictEqual(
    JSON.stringify(["dummy.txt"])
  );
});

test("Scan folder containing 100 files", () => {
  expect(scanner.scan("../dummy/test2").length).toBe(100);
});
