function charsInRange(char1, char2) {
  let firstChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let secondCHar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let result = [];
  for (let i = firstChar + 1; i < secondCHar; i++) {
    result.push(String.fromCharCode(i));
  }
  let a = 5;
  console.log(typeof a);

  console.log(result.join(" "));
}
charsInRange("a", "d");
