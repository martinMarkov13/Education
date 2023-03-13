function employees(input) {
  let listOfEmployees = [];
  class Employees {
    constructor(name, length) {
      this.name = name;
      this.length = length;
    }
  }
  for (let employee of input) {
    let currentEmployee = new Employees(employee, employee.length);
    listOfEmployees.push(currentEmployee);
  }
  listOfEmployees.forEach((curEmployee) =>
    console.log(
      `Name: ${curEmployee.name} -- Personal Number: ${curEmployee.length}`
    )
  );
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
