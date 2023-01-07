import Helper from "../src/utils/Helper";

test("return empty if parameter is empty", () => {
  expect(Helper.ExtractToken("")).toEqual("");
});

test("return empty if parameter without space separator", () => {
  expect(Helper.ExtractToken("Bearer123456")).toEqual("");
});

test("return empty if parameter without Bearer at first", () => {
  expect(Helper.ExtractToken(" 123456")).toEqual("");
});

test("return empty if parameter with bearer and space and without token", () => {
  expect(Helper.ExtractToken("Bearer ")).toEqual("");
});

test("return token if parameter with bearer and space and token", () => {
  expect(Helper.ExtractToken("Bearer 123")).toEqual("123");
});
