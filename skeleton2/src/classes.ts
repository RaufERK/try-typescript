class Department {
  static fiscalYear = 2000;

  static emplyee(name: string) {
    return { name };
  }

  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.name = name;
    this.id = id;
  }

  discribe() {
    console.log(`Department ID: ${this.id} name: ${this.name} `);
  }

  addEmployees(...employee: string[]) {
    employee.forEach((el) => this.employees.push(el));
  }
  showEmployees() {
    console.log(`${this.employees.length} : ${this.employees}`);
  }
}

// console.log(Department.fiscalYear);
// console.log(Department.emplyee('RAuf'));

class ItDepartment extends Department {
  private static instance: ItDepartment;

  private constructor(id: string, public admins: string[]) {
    super(id, 'ITdepartment');
  }

  static getInstance() {
    if (!ItDepartment.instance) {
      ItDepartment.instance = new ItDepartment('33e3', ['Rauf', 'Lev']);
    }
    return ItDepartment.instance;
  }

  addEmployees(name: string) {
    if (name === 'Rauf') return;
    this.employees.push(name);
  }

  showAdmin() {
    console.log(this.admins);
  }
}

const itDepartment = ItDepartment.getInstance();
const itDepartment2 = ItDepartment.getInstance();
console.log(itDepartment);
console.log(itDepartment2);
console.log(
  ' itDepartment === itDepartment2  ==>',
  itDepartment === itDepartment2
);

// const it = new ItDepartment('33e3', ['Rauf', 'Lev']);
// console.log(it);
// it.showAdmin();
// it.addEmployees('Rauf');
// it.addEmployees('Eleonora');
// it.addEmployees('ANNA');
// it.showEmployees();

class AccountDepartment extends Department {
  public lastReport: string = '';
  public allReports: string[] = [];

  constructor(id: string, public totalMoney: number) {
    super('222ERR', 'ACCOUNT');
  }

  showThis() {
    console.log(this);
  }

  addReport(newReport: string) {
    this.lastReport = newReport;
    this.allReports.push(newReport);
  }

  get report() {
    return this.lastReport;
  }

  set report(newReport: string) {
    this.addReport(newReport);
  }
}

// const accountDepartment = new AccountDepartment('S01', 5000);
// accountDepartment.totalMoney += 1000;
// accountDepartment.showThis();
// accountDepartment.report = '333333';
// console.log(accountDepartment.report);
