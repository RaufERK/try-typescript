
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Rauf_Erk',
  age: 47,
  hobbies: ['bycicles', 'tv', 'video'],
  role: [2, 'author']
}


let favoritesActivity: [number, string] = [3333, '1'];
favoritesActivity[0] = 33;
favoritesActivity[1] = 'TEXT';
favoritesActivity.push(1212121)


console.log(person.hobbies);
console.log(favoritesActivity);

for (const hobbie of person.hobbies) {
  console.log(hobbie.toLocaleUpperCase());
}


const myTuple: [number, string] = [2, 'any String']

console.log(myTuple);


enum Role {
  ONE = 1000,
  TWO = 2000,
  TREE = 'TFTFTFT'
}

console.log(Role.ONE);
console.log(Role.TWO);
console.log(Role.TREE);
