function addAndRemoveElements(arr) {
  let result = [];
  let number = 1;
  for (let command of arr) {
    if (command == "add") {
      result.push(number);
    } else if (command == "remove") {
      result.pop();
    }
    number++;
  }
  if (result.length <= 0) {
    console.log("Empty");
  }
  for (const iterator of result) {
    console.log(iterator);
  }
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
