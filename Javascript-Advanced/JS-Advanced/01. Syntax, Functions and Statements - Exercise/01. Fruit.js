function fruit(fruit,weight,money){
    let weightInKg = weight/1000;
    let totalMoney = money*weightInKg
console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)