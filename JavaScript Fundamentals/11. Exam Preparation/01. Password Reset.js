function passwordReset(input) {
    let text = input.shift()
  
    while (input[0] !== "Done") {
      let tokens = input.shift().split(" ");
      let command = tokens[0];
      let odd = []
      if (command == "TakeOdd") {
        for (let i = 0; i < text.length; i++) {
          if (i % 2 == 1) {
            odd.push(text[i])
          }
        }
        text = odd.join("")
        console.log(odd.join(""))
      } else if (command == "Cut") {
        let start = tokens[1];
        let count = tokens[2];
        text = text.replace(text.substr(start, count), "")
        console.log(text)
      } else if (command == "Substitute") {
        let substring = tokens[1];
        let substitute = tokens[2]
        if (text.includes(substring)) {
          while (text.includes(substring)) {
            text = text.replace(substring, substitute)
          }
          console.log(text)
        } else {
          console.log(`Nothing to replace!`)
        }
      }
    }
    console.log(`Your password is: ${text}`)
  }