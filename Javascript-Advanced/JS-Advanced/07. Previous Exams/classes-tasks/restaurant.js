class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(products) {
    for (let product of products) {
      let [productName, productQuantity, productTotalPrice] =
        product.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (productTotalPrice <= this.budgetMoney) {
        if (!this.stockProducts.hasOwnProperty(productName)) {
          this.stockProducts[productName] = 0;
        }

        this.stockProducts[productName] += productQuantity;
        this.budgetMoney -= productTotalPrice;
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = {};
      this.menu[meal]["products"] = {};
      this.menu[meal]["price"] = price;

      for (const item of neededProducts) {
        let [productName, productQuantity] = item.split(" ");
        productQuantity = Number(productQuantity);
        this.menu[meal]["products"][productName] = productQuantity;
      }

      if (Object.keys(this.menu).length == 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else if (
        Object.keys(this.menu).length == 0 ||
        Object.keys(this.menu).length > 1
      ) {
        return `Great idea! Now with the ${meal} we have ${
          Object.keys(this.menu).length
        } meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }

  showTheMenu() {
    if (Object.keys(this.menu).length == 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      let result = [];
      for (const meal in this.menu) {
        result.push(`${meal} - $ ${this.menu[meal].price}`);
      }
      return result.join("\n");
    }
  }

  makeTheOrder(meal) {
    let foundMeal = Object.keys(this.menu).find((m) => m == meal);
    if (foundMeal == undefined) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    for (const prod in this.menu[meal]["products"]) {
      if (
        Object.keys(this.stockProducts).includes(prod) &&
        this.stockProducts[prod] >= this.menu["products"][prod]
      ) {
        this.stockProducts[prod] -= this.menu[meal]["products"][prod];
        this.budgetMoney += this.menu[meal]["price"];
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]["price"]}.`;
      } else {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry..."`;
      }
    }
  }
}
let test = new Restaurant(1000);
console.log(
  test.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);
console.log(test.budgetMoney);
