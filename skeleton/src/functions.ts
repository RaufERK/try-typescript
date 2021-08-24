function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log('RESULT is : ', num);
}

console.log(printResult1(add(10, 20)));

let newAddFoo: (a: number, b: number) => number;
newAddFoo = add;

console.log(newAddFoo(8, 8));

function addAndHandle(a: number, b: number, cb: (arg: number) => void) {
  const result = a + b;
  cb(result);
}

addAndHandle(111, 222, (result) => console.log(result));
