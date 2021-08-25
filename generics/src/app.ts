// console.log('Hey Hi!!!');

// const namesAndMore: Array<number | string> = [44, 55, 'Name 1', 'Name22'];

// const str: string[] = namesAndMore.map((el) => String(el).toLocaleUpperCase());
// console.log(str);

// const promise1: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('TEXT STRIG!!!');
//   }, 2000);
// });

// promise1.then(console.log);

function merge<T extends object, U extends object>(p1: T, p2: U) {
  // if (typeof p1 === 'number') return p1 + p2;
  return Object.assign(p1, p2);
}

const mergedRes = merge({ name: 'Rauf', surname: 'Erk' }, { salary: 30 });
// const mergeRes2 = merge(10, 20);

console.log(mergedRes);
// console.log(mergeRes2);
