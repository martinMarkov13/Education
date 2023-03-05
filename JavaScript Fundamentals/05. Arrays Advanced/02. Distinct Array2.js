function distinctArray(arr) {
  let uniqueChars = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
  });

  console.log(uniqueChars.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
