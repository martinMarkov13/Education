function activationKeys(input) {
    let key = input.shift();
  
    while (input[0] !== "Generate") {
      let tokens = input.shift().split(">>>");
      let command = tokens[0];
  
      if (command == "Contains") {
        let substring = tokens[1]
        if (key.includes(substring)) {
          console.log(`${key} contains ${substring}`)
        } else {
          console.log(`Substring not found!`)
        }
      } else
      if (command == "Flip") {
        let casee = tokens[1];
        let startingIndex = tokens[2];
        let endIndex = tokens[3];
        if (casee == "Upper") {
          let upperCase = key.slice(startingIndex, endIndex).toUpperCase();
          key = key.slice(0, startingIndex) + upperCase + key.slice(endIndex, );
          console.log(key)
        } else if (casee == "Lower") {
          let lowerCase = key.slice(startingIndex, endIndex).toLowerCase();
          key = key.slice(0, startingIndex) + lowerCase + key.slice(endIndex, );
          console.log(key)
        }
      }else if(command == "Slice"){
      let startingIndex = tokens[1];
      let endIndex = tokens[2];
      let sliced = key.slice(startingIndex,endIndex)
      key = key.slice(0,startingIndex) + key.slice(endIndex,);
      console.log(key);
      }
    }
    console.log(`Your activation key is: ${key}`)
  }