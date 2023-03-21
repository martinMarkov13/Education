function NeedForSpeed(input) {
    let numberOfCars = Number(input.shift());
    let carsObject = {};
    for (let i = 0; i < numberOfCars; i++) {
      let [model, mileage, fuel] = input.shift().split("|");
      mileage = +mileage;
      fuel = +fuel;
      carsObject[model] = {
        mileage,
        fuel
      }
    }
    while (input[0] != "Stop") {
      let tokens = input.shift().split(" : ");
      let command = tokens[0];
      let car = tokens[1];
  
      if (command == "Drive") {
        let fuelo = Number(tokens[3]);
        let distance = Number(tokens[2]);
        if (fuelo >= carsObject[car].fuel) {
          console.log(`Not enough fuel to make that ride`);
        } else {
          carsObject[car].mileage += distance;
          carsObject[car].fuel -= fuelo;
          console.log(`${car} driven for ${distance} kilometers. ${fuelo} liters of fuel consumed.`);
        }
        if (carsObject[car].mileage >= 100000) {
          console.log(`Time to sell the ${car}!`)
          delete carsObject[car];
        }
      } else if (command == "Refuel") {
        let fuelo = Number(tokens[2]);
        if (fuelo + carsObject[car].fuel > 75) {
          carsObject[car].fuel += 75 - fuelo;
          console.log(`${car} refueled with ${75-fuelo} liters`);
        } else {
          carsObject[car].fuel += fuelo;
          console.log(`${car} refueled with ${fuelo} liters`)
        }
      } else if (command == "Revert") {
        let km = tokens[2];
        if (carsObject[car].mileage - km >= 10000) {
          carsObject[car].mileage -= km;
          console.log(`${car} mileage decreased by ${km} kilometers`)
        } else {
          carsObject[car].mileage = 10000;
        }
      }
    }
    for (let el in carsObject) {
      console.log(`${el} -> Mileage: ${carsObject[el].mileage} kms, Fuel in the tank: ${carsObject[el].fuel} lt.`)
    }
  }