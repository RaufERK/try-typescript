interface Nemable {
  readonly name: string;
}

interface Agable {
  age: number;
}

interface Greetable extends Agable, Nemable {
  printInfo(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  printInfo(text: string) {
    console.log(` Name is : ${this.name} Age is: ${this.age} Text is: ${text}`);
  }
}

let rauf: Greetable = new Person('Rauf', 30);
rauf.name = 'Larisa!';

rauf.printInfo('Some text');
