function nXNMatrix(num) {
  let res = "";

  for (let i = 1; i <= num; i++) {
    res += num + " ";
  }

  for (let i = 1; i <= num; i++) {
    console.log(`${res}`);
  }
}
nXNMatrix(7);
