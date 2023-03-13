function employees(input) {
  let listOfEmployees = {};
  for (let employee of input) {
    listOfEmployees.name = employee;
    listOfEmployees.length = employee.length;
    console.log(
      `Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.length}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
