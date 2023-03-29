function calorieObject(products) {
  let result = {};
  for (let index = 0; index < products.length; index += 2) {
    const element = products[index];
    result[element] = +products[index + 1];
  }
  console.log(result);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
