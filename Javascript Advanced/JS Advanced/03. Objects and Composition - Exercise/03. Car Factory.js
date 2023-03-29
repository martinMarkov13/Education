function carFactory(wantedCar) {
  let engine = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriage = [
    { type: "hatchback", color: wantedCar.color },
    { type: "coupe", color: wantedCar.color },
  ];
  let wheels =
    wantedCar.wheelsize % 2 == 0
      ? wantedCar.wheelsize - 1
      : wantedCar.wheelsize;
  return {
    model: wantedCar.model,
    engine: engine.filter((e) => e.power >= wantedCar.power)[0],
    carriage: carriage.filter((c) => c.type == wantedCar.carriage)[0],
    wheels: [wheels, wheels, wheels, wheels],
  };
 
}
console.log(carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
}));
