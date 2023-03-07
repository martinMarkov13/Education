function cookingMasterclass(input) {
  let budget = Number(input[0]);
  let students = Number(input[1]);
  let flourPrice = Number(input[2]);
  let eggPrice = Number(input[3]);
  let apron = Number(input[4]);
  let eggsForOneStudent = eggPrice * 10;
  let r = Number(Math.ceil(students * 1.2));
  let apronPrice = apron * r;
  let totalEggs = eggsForOneStudent * students;

  let freeFlourCounter = 0;
  for (let index = 1; index <= students; index++) {
    if (index % 5 === 0) {
      freeFlourCounter++;
    }
  }
  let totalFlour = flourPrice * students - flourPrice * freeFlourCounter;

  let sum = apronPrice + totalEggs + totalFlour;
  let diff = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(`Items purchased for ${sum.toFixed(2)}$.`);
  } else {
    console.log(`${diff.toFixed(2)}$ more needed.`);
  }
}
cookingMasterclass([946, 20, 12.05, 0.42, 27.89]);
