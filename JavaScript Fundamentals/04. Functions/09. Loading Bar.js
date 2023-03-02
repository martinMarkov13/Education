function loadingBar(number) {
  let counter = number / 10;
  let procentages = "%".repeat(counter);
  let dots = ".".repeat(10 - counter);

  if (number === 100) {
    console.log(`${number}% Complete!`);
    console.log(`[${procentages}]`);
  } else {
    console.log(`${number}% [${procentages}${dots}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(50);
