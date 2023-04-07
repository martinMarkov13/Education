function lowestPrice(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    let line = array[i].split(" | ");
    let price = Number(line[2]);
    let town = line[0];
    let product = line[1];

    if (!result.hasOwnProperty(product)) {
      result[product] = {
        town,
        price,
      };
    } else {
      if (price < result[product].price) {
        result[product] = {town, price};
      }
    }
  }
  let productNames = Object.keys(result);
  for (let element of productNames) {
    console.log(`${element} -> ${result[element].price} (${result[element].town}) `);
  }
}
lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
