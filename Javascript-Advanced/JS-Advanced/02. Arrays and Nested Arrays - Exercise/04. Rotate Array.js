function rotateArray(arr, num) {
  for (let index = 0; index < num; index++) {
    let lastIndex = arr.pop();
    arr.unshift(lastIndex);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)
