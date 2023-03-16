function wordCount(input) {
  let words = input.shift().split(" ");
  let match = {};

  for (let word of words) {
    match[word] = 0;
  }

  for (let word of input) {
    if (match.hasOwnProperty(word)) {
      match[word]++;
    }
  }
  let sorted = Object.entries(match);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let [word, count] of sorted) {
    console.log(word, "-", count);
  }
}
wordCount([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
