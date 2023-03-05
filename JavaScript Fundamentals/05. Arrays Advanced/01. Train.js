function train(arr) {
  let passengersInWagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    let currComand = command.split(" ");

    if (currComand[0] === "Add") {
      passengersInWagons.push(currComand[1]);
    } else {
      for (let index = 0; index < passengersInWagons.length; index++)
        if (passengersInWagons[index] + Number(currComand[0]) <= maxCapacity) {
          passengersInWagons[index] += Number(currComand[0]);
          break;
        }
    }
  }
  console.log(passengersInWagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
