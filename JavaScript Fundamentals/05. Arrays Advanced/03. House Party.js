function houseParty(array) {
  let list = [];
  for (let index = 0; index < array.length; index++) {
    let command = array[index];
    let currCommand = command.split(" ");
    if (!currCommand.includes("not")) {
      if (list.includes(currCommand[0])) {
        console.log(`${currCommand[0]} is already in the list!`);
      } else {
        list.push(currCommand[0]);
      }
    } else {
      if (!list.includes(currCommand[0])) {
        console.log(`${currCommand[0]} is not in the list!`);
      } else {
        list.pop();
      }
    }
  }
  console.log(list.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
