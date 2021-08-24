console.log('Hey ! Run!');

type Admin = {
  name: string;
  privileg: string[];
  grade?: string;
};

type Employee = {
  name: string;
  age: number;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const tryIntersection: ElevatedEmployee = {
  name: 'Rauf',
  age: 33,
  startDate: new Date(),
  privileg: ['JS'],
  grade: 'Middle Developer',
};

console.log(tryIntersection);

type Numerable = number | boolean;
type Stringable = string | number;

type someExple = Numerable & Stringable;
const expl1: someExple = 333;
console.log(expl1);

function printEmployeeInfo(emp: Admin | Employee): void {
  if ('privileg' in emp) {
    console.log(emp.privileg);
  }
  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}

const admin1: Admin = {
  name: 'Rauf',
  grade: 'Middle',
  privileg: ['create-server'],
};
const employee1 = {
  name: 'Natalia',
  age: 33,
  startDate: new Date(),
};
printEmployeeInfo(admin1);
printEmployeeInfo(employee1);

class Car {
  drive() {
    console.log('Driving a Car!!');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck...');
  }
  loadCargo(curgoWeight: number) {
    console.log(` Loading ...${curgoWeight} Tons of curgo!!`);
  }
}

function runVehicle(vehicle: Car | Truck) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Car) {
    vehicle.drive();
  }
}
// runVehicle(new Car());
// runVehicle(new Truck());

function AdvancedCheck(vcl: Car | Truck) {
  const car = vcl as Car;
  const truck = vcl as Truck;

  // console.log(car);
  // console.log(truck);

  if (truck.loadCargo) {
    truck.loadCargo(100);
  } else if (car.drive) {
    car.drive();
  }
}
AdvancedCheck(new Car());
// AdvancedCheck(new Truck());

interface Bird {
  type: 'bird';
  fly(): void;
}
interface Horse {
  type: 'horse';
  run(): void;
}
const bird: Bird = {
  type: 'bird',
  fly() {
    console.log('  Fly!!!!');
  },
};

const horse: Horse = {
  type: 'horse',
  run() {
    console.log('Running!!');
  },
};

console.log(bird);
console.log(horse);

function moveAnimal(anml: Bird | Horse) {
  switch (anml.type) {
    case 'bird':
      anml.fly();
      break;
    case 'horse':
      anml.run();
      break;

    default:
      break;
  }
}
moveAnimal(bird);
moveAnimal(horse);

function isBird(anml: Bird | Horse): anml is Bird {
  return (anml as Bird).fly !== undefined;
}

console.clear();

function movePro(anml: Bird | Horse) {
  if (isBird(anml)) {
    anml.fly();
  } else {
    anml.run();
  }
}

movePro(bird);
movePro(horse);
