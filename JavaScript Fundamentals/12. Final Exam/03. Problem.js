function wildZoo(input) {
  let records = {};
  while (input[0] !== "EndDay") {
    let line = input.shift().split(": ");
    let command = line[0];
    let [name, quantity, area] = line[1].split("-");
    quantity = +quantity;

    if (command == "Add") {
      if (!records.hasOwnProperty(name)) {
        records[name] = {
          quantity,
          area,
        };
      } else {
        records[name].quantity += quantity;
      }
    } else if (command == "Feed") {
      if (records.hasOwnProperty(name)) {
        records[name].quantity -= quantity;
        if (records[name].quantity <= 0) {
          console.log(`${name} was successfully fed`);
          delete records[name];
        }
      }
    }
  }
  let entries = Object.entries(records);
  console.log(`Animals:`);
  for (let [animal, info] of entries) {
    console.log(` ${animal} -> ${info.quantity}g`);
  }
  console.log(`Areas with hungry animals:`);
  let hungryAnimals = {};
  for (let [animal, info] of entries) {
    if (!hungryAnimals.hasOwnProperty(info.area)) {
      hungryAnimals[info.area] = {
        counter: 1,
      };
    } else {
      hungryAnimals[info.area].counter += 1;
    }
  }

  let res = Object.entries(hungryAnimals);
  for (let [area, info] of res) {
    console.log(`  ${area}: ${info.counter}`);
  }
}
wildZoo([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
console.log(`-------------`);
wildZoo([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);
console.log(`-------------`);
wildZoo([
  "Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay",
]);
