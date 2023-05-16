class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let printType = [];
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let product = this.availableProducts.find((v) => v.type == type);
      if (product == undefined) {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
        printType.push(type);
      } else {
        product.quantity += quantity;
        if (price > product.price) {
          product.price = price;
        }
      }
    }
    return `Successfully added ${printType.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const product of selectedProducts) {
      let [type, quantity] = product.split(" ");
      quantity = Number(quantity);
      let vegetable = this.availableProducts.find((v) => v.type == type);
      if (vegetable == undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else if (vegetable.quantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      let price = vegetable.price * quantity;
      vegetable.quantity -= quantity;
      totalPrice += price;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let vegetable = this.availableProducts.find((v) => v.type == type);
    if (vegetable == undefined) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (quantity > vegetable.quantity) {
      vegetable.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      vegetable.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
    let result =[]
    sorted.forEach((p) => result.push(`${p.type}-${p.quantity}-$${p.price}`))
    return [
      "Available vegetables:",
      result.join("\n"),
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`,
    ].join("\n");
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

