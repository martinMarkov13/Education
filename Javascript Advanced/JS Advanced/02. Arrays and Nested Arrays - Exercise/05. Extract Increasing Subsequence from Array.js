function exctract(array) {
  let result = [];
  let biggestNum = array[0];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element >= biggestNum) {
      result.push(element);
      biggestNum = element;
    }
  }
  return result;
}
exctract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
