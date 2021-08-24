console.log('Start Abstract Class trying...');

abstract class DepartmentA {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract showAbst(): void;
  abstract myLovingCOnstant: number;

  showMe() {
    console.log('This Department Name is : ', this.name);
  }
}

// const depA = new DepartmentA('Abstract departmen');
// depA.showMe();

class NewDepA extends DepartmentA {
  myLovingCOnstant = 3000;
  constructor(name: string) {
    super(name);
  }
  showAbst() {
    console.log('THIS ABS FOO => Class NAme is =>', this.name);
    console.log('myLovingCOnstant =>', this.myLovingCOnstant);
  }
}

// const absInstance = new NewDepA('TRY ABSRUCT CLASSES');
// absInstance.showAbst();

// abstract class Base {
//   constructor(public name: string) {}
//   abstract getName(): String;
//   printName = () => console.log(`This Class Name : ${this.name}`);
// }

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log('Hello, ' + this.getName());
  }
}

// class Derived extends Base {
//   getName = () => this.name;
// }

class Derived extends Base {
  getName() {
    return 'world';
  }
}

function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
// greet(Base);

// const inst = new Derived('ABS Class Name!!');
// inst.printName();

const hocFoo = (classAsParam: new () => Base) => {
  const ins = new classAsParam();
  ins.printName();
};

hocFoo(Derived);
// hocFoo(Base);
