function add1(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
): number | void {
  const result: number = n1 + n2;
  if (showResult) {
    console.log(`${resultPhrase} ${result}`);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resPhrase = 'The Result is :';

add1(number1, number2, printResult, resPhrase);
