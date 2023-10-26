export default function fizzBuzz(num1: number, num2: number): string {
  let result = "";

  for (let num = num1; num <= num2; num++) {
    const isFizz = num % 3 === 0;
    const isBuzz = num % 5 === 0;

    result += (isFizz ? "fizz" : "") + (isBuzz ? "buzz" : "") || num.toString();
  }

  return result;
}
