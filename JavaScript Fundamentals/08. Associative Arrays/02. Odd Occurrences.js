function oddOccurrences(input) {
  let sentence = input.toLowerCase().split(" ");
  let obj = {};

  for (let word of sentence) {
    if (obj.hasOwnProperty(word)) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  }
  /*
  let entries = Object.entries(obj).filter((KVP) => {
    return KVP[1] % 2 !== 0;
  });
  console.log(entries.map((entry) => entry[0]).join(" "));
  */
  let output = [];
  for (let word in obj) {   
    if (obj[word] % 2 !== 0) {
      output.push(word);
    }
  }
  console.log(output.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
