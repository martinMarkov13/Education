function sortAnArrayBy2Ctriteria(arr) {
  let sortedAlphabeticaly = arr.sort();

  let sortedByLength = sortedAlphabeticaly.sort((a, b) => a.length - b.length);

  console.log(sortedByLength.join(`\n`));
}
sortAnArrayBy2Ctriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
