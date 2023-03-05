function searchForNumber(arr, operations) {
  let newArr = arr.splice(0, operations[0]);
  newArr.splice(0, operations[1]);

  let counter = 0;
  for (let num of newArr) {
    if (num === operations[2]) {
      counter++;
    }
  }
  console.log(`Number ${operations[2]} occurs ${counter} times.`);
}
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
