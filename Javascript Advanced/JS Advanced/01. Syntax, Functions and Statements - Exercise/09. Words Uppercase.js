function wordsUppercase(str) {
  str = str.toUpperCase();
  let pattern = /[\w+]+/g;
  let match = pattern.exec(str);
  let res = [];

  while (match != null) {
    res.push(match[0]);
    match = pattern.exec(str);
  }
  console.log(res.join(", "));
}

wordsUppercase("Hi, how are you?");
//wordsUppercase("hello");
