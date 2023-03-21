function solve(input) {
    let text = input.shift();
    while (input[0] !== "Reveal") {
      let line = input.shift().split(":|:")
      let commandName = line[0];
      let param1 = line[1];
      let param2 = line[2];
  
      if (commandName == "InsertSpace") {
        let leftPart = text.slice(0, Number(param1));
        let rightPart = text.slice(Number(param1));
        text = leftPart + " " + rightPart;
        console.log(text)
      } else if (commandName == "Reverse") {
        if (text.includes(param1)) {
          let leftPart = text.slice(0, text.indexOf(param1));
          let rightPart = text.slice(leftPart.length + param1.length)
          text = leftPart + rightPart + param1.split("").reverse().join("")
          console.log(text)
        } else {
          console.log("error")
  
        }
      } else if (commandName === "ChangeAll") {
        text = text.split(param1).join(param2)
        console.log(text)
      }
    }
    console.log(`You have a new text message: ${text}`)
  }