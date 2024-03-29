class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCards = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model == "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let car = this.availableCars.find((c) => c.model == model);
    if (car == undefined) {
      throw new Error(`${model} was not found!`);
    }
    let carMileage = car.mileage;
    let soldPrice = 0;
    if (carMileage <= desiredMileage) {
      soldPrice = car.price;
    } else if (carMileage - desiredMileage <= 40000) {
      soldPrice = car.price * 0.95
    } else if (carMileage - desiredMileage > 40000) {
      soldPrice = car.price * 0.90;
    }
    this.totalIncome += soldPrice;
    this.availableCars.splice(this.availableCars.indexOf(car), 1);
    this.soldCards.push({
      model,
      horsepower: car.horsepower,
      soldPrice,
    });
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    let result = [`-Available cars:`];
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    } else {
      for (const car of this.availableCars) {
        result.push(
          `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
            2
          )} km - ${car.price.toFixed(2)}$`
        );
      }
    }
    return result.join("\n");
  }

  salesReport(criteria) {
    let report = [];
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error(`Invalid criteria!`);
    }
    if (criteria == "horsepower") {
      this.soldCards.sort((a, b) => b.horsepower - a.horsepower);
    } else {
      this.soldCards.sort((a, b) => a.model.localeCompare(b.model));
    }
    let incomeRow = `-${
      this.name
    } has a total income of ${this.totalIncome.toFixed(2)}$`;
    let soldCarsCount = `-${this.soldCards.length} cars sold:`;
    report.push(incomeRow);
    report.push(soldCarsCount);
    for (const car of this.soldCards) {
      report.push(
        `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`
      );
    }
    return report.join("\n");
  }
}
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
