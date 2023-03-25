function cookingByNumbers(number, com1, com2, com3, com4, com5) {
  number = +number;
  let list = [com1, com2, com3, com4, com5];
  let chop = (x) => x / 2;
  let dice = (x) => Math.sqrt(x);
  let spice = (x) => ++x;
  let bake = (x) => x * 3;
  let fillet = (x) => x - x * 0.2;

  for (let index = 0; index < list.length; index++) {
    switch (list[index]) {
      case "chop":
        number = chop(number);
        console.log(number);
        break;
      case "dice":
        number = dice(number);
        console.log(number);
        break;
      case "spice":
        number = spice(number);
        console.log(number);
        break;
      case "bake":
        number = bake(number);
        console.log(number);
        break;
      case "fillet":
        number = fillet(number);
        console.log(number);
        break;
    }
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
