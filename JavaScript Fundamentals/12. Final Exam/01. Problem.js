function passwordValidator(input) {
  let password = input.shift();
  for (let line of input) {
    line = line.split(" ");
    let command = line[0];
    if (command == "Make" && line[1] == "Upper") {
      let index = Number(line[2]);
      let split = password.split("");
      if (index >= 0 && index < split.length) {
        let char = password.charAt(index).toUpperCase();
        password = password.replace(password.charAt(index), char);
        console.log(password);
      }
    }
    if (command == "Make" && line[1] == "Lower") {
      let index = +line[2];
      let split = password.split("");
      if (index >= 0 && index < split.length) {
        let char = password.charAt(index).toLowerCase();
        password = password.replace(password.charAt(index), char);
        console.log(password);
      }
    }
    if (command == "Insert") {
      let index = Number(line[1]);
      let char = line[2];
      if (password[index] != undefined) {
        let leftSide = password.slice(0, index);
        let rightSide = password.slice(index);
        password = leftSide + char + rightSide;
        console.log(password);
      }
    }
    if (command == "Replace") {
      let char = line[1];
      if (!password.includes(char)) {
        continue;
      } else {
        let charValue = Number(line[1].charCodeAt());
        let value = Number(line[2]);
        let sumChar = String.fromCharCode(charValue + value);
        password = password.split(char).join(sumChar);
        console.log(password);
      }
    }
    if (command == "Validation") {
      let pattern = /^[A-Za-z0-9_]+$/g;
      let patternUpperCase = /[A-Z]+/g;
      let patternLowerCase = /[a-z]+/g;
      let patternDigits = /[0-9]+/g;
      if (password.length < 8) {
        console.log("Password must be at least 8 characters long!");
      }
      if (!pattern.test(password)) {
        console.log("Password must consist only of letters, digits and _!");
      }
      if (!patternUpperCase.test(password)) {
        console.log("Password must consist at least one uppercase letter!");
      }
      if (!patternLowerCase.test(password)) {
        console.log("Password must consist at least one lowercase letter!");
      }
      if (!patternDigits.test(password)) {
        console.log("Password must consist at least one digit!");
      }
    }
    if (command == "Complete") {
        break;
      }
    }
  }
passwordValidator([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);
console.log(`-----------------------`);
passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
