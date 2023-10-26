import fizzBuzz from "./fizzbuzz";

//* Résultat du FizzBuzz : 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz //

test("should return 1", () => {
  expect(fizzBuzz(1, 1)).toBe("1");
});
test("should return 2", () => {
  expect(fizzBuzz(2, 2)).toBe("2");
});
test("should return fizz instead of 3", () => {
  expect(fizzBuzz(3, 3)).toBe("fizz");
});
test("should return buzz instead of 5", () => {
  expect(fizzBuzz(5, 5)).toBe("buzz");
});
test("should return fizz instead of 6", () => {
  expect(fizzBuzz(6, 6)).toBe("fizz");
});
test("should return buzz instead of 10", () => {
  expect(fizzBuzz(10, 10)).toBe("buzz");
});
test("should return fizzbuzz instead of 15", () => {
  expect(fizzBuzz(15, 15)).toBe("fizzbuzz");
});
test("should return 1 and 2", () => {
  expect(fizzBuzz(1, 2)).toBe("12");
});
test("should return 1 and fizz", () => {
  expect(fizzBuzz(1, 3)).toBe("12fizz");
});
test("should return 12fizz4 and buz ", () => {
  expect(fizzBuzz(1, 5)).toBe("12fizz4buzz");
});
test("should return 12fizz4buzzfizz78fizzbuzz11fizz1314 and fizzbuzz ", () => {
  expect(fizzBuzz(1, 15)).toBe("12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz");
});
