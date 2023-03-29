function storeCatalogue(array) {
  let obj = {};
  let sorted = array.sort((a, b) => a.localeCompare(b));
  for (let products of sorted) {
    let [product, price] = products.split(" : ");
    if (!obj.hasOwnProperty(product[0])) {
      obj[product[0]] = {};
    }
    obj[product[0]][product] = price;
  }
  let letter = Object.keys(obj);
  for (let element of letter) {
      console.log(`${element}`);
    let keys = Object.keys(obj[element]);
    for (const iterator of keys) {
      console.log(`${iterator}: ${obj[element][iterator]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/
