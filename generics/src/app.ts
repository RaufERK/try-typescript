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

interface Langthy {
  length: Number;
}

function printAndDescibe<T extends Langthy>(element: T): [T, string] {
  let describeString = 'No length here(';

  // const length: Number = param.length;
  if (element.length === 1) {
    describeString = 'We have only 1 element)';
  } else if (element.length > 1) {
    describeString = `We have ${element.length} elements`;
  }
  return [element, describeString];
}

console.log(printAndDescibe('Hi there!!'));
console.log(printAndDescibe([1, 2, 3]));
console.log(printAndDescibe([]));
console.log(printAndDescibe(''));

console.clear();

function extractAndPrint<T extends object, U extends keyof T>(
  param: T,
  key: U
) {
  return 'Here is the : ' + param[key];
}

console.log(extractAndPrint({ name: 'Rauf' }, 'name'));

class DataStorage<T extends number | string | boolean> {
  private data: Array<T> = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  copy() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.add('Rauf');
stringStorage.add('Max');
stringStorage.add('Lion');
stringStorage.remove('Lion');
console.log(stringStorage.copy());

const numbersStorage = new DataStorage<number>();
numbersStorage.add(1);
numbersStorage.add(2);
numbersStorage.add(3);
numbersStorage.remove(3);
console.log(numbersStorage.copy());

interface CourseGoal {
  title: String;
  description: String;
  complite: Date;
}

function getCourseGoal(
  title: String,
  description: String,
  complite: Date
): CourseGoal {
  const result: Partial<CourseGoal> = {};
  result.title = title;
  result.description = description;
  result.complite = complite;
  return result as CourseGoal;
}

console.log(getCourseGoal('TS', 'TS Course', new Date()));

const names: Readonly<String[]> = ['Rauf', 'Natasha'];

// names.push('Daniel');
console.clear();

console.log(names);

// names.pop()
