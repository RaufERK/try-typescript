type myCustomType = 'as-number' | 'as-text';
type Combinable = number | string;

function combine(
  param1: Combinable,
  param2: Combinable,
  resultType: myCustomType
) {
  if (
    (typeof param1 === 'number' && typeof param2 === 'number') ||
    resultType === 'as-number'
  ) {
    return +param1 + +param2;
  }
  return param1.toString() + param2.toString();
}

console.log(combine(10, 20, 'as-number'));
console.log(combine('10', '20', 'as-number'));
console.log(combine('Rauf', 'Natasha', 'as-text'));

type User = { name: string; age: number };
const u1: User = { name: 'rauf', age: 33 };

// console.log(u1);

const greet = (user: User) => {
  console.log('USER NAME =>', user.name);
};

greet(u1);
