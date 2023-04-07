function carFactory2(orderedCar) {
  let car = {};
  car.model = orderedCar.model;

  if (orderedCar.power >= 200) {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  } else if (orderedCar.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  }
  car.carriage = {
    type: orderedCar.carriage,
    color: orderedCar.color,
  };
  if (orderedCar.wheelsize % 2 == 0) {
    orderedCar.wheelsize -= 1;
  }
  car.wheels = [orderedCar.wheelsize,orderedCar.wheelsize,orderedCar.wheelsize,orderedCar.wheelsize];
  return car;
}
console.log(carFactory2({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
}));
