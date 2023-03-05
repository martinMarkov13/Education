function bombNumbers(arr, bomb) {
  let result = 0;
  let bombNumber = bomb[0];
  let bombPower = bomb[1];

  let bombedIndex = arr.indexOf(bombNumber);

  while (arr.includes(bomb[0])) {
    let startExplosionIndex = Math.max(0, bombedIndex - bombPower);
    let explosionLength = bombPower * 2 + 1;
    arr.splice(startExplosionIndex, explosionLength);
    bombedIndex = arr.indexOf(bombNumber);
  }

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
