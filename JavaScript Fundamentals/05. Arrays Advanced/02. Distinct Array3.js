function distinctArray(arr) {
  let newArray = [];

  for (let num of arr) {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  }
  console.log(newArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
