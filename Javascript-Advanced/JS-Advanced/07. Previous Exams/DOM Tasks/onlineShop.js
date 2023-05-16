const { purple } = require("color-name");
const { number } = require("yargs");

class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    quantity = Number(quantity);
    spaceRequired = Number(spaceRequired);

    if (this.warehouseSpace < spaceRequired) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.products.push({
      product,
      quantity,
    });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    minimalQuantity = Number(minimalQuantity)

    let prod = this.products.find(p=>p.product == product)
    if(prod == undefined){
        throw new Error(`There is no ${product} in the warehouse.`)
    }
    if(minimalQuantity <= 0){
        throw new Error(`The quantity cannot be zero or negative.`)
    }

    if(minimalQuantity <= prod.quantity){
        return `You have enough from product ${product}.`
    }else{
        let difference = minimalQuantity-prod.quantity
        prod.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
    }

  }

  sellProduct(product) {
    let prod = this.products.find(p=>p.product == product)
    if(prod == undefined){
        throw new Error(`There is no ${product} in the warehouse.`)
    }
    prod.quantity--
    this.sales.push({
        product,
        quantity:1
    })
    return `The ${product} has been successfully sold.`
  }

  revision() {
    if(this.sales.length == 0){
        throw new Error("There are no sales today!")
    }
    let result = [`You sold ${this.sales.length} products today!`, "Products in the warehouse:"];
    this.products.forEach(p=>result.push(`${p.product}-${p.quantity} more left`))
    return result.join("\n")
  }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


 

