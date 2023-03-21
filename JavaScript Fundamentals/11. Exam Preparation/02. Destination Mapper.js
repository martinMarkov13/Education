function destinationMapper(input) {
    let pattern = /(\=|\/)[A-Z][A-Za-z]{2,}\1/gm
    let matches = input.match(pattern);
    let points = 0
    let result = [];
    if (matches != null) {
      for (let match of matches) {
        let destination = match.split("=").join("").split("/").join("");
        result.push(destination)
        points += destination.length;
  
      }
    }
    console.log(`Destinations: ${result.join(", ")}`)
    console.log(`Travel Points: ${points}`)
  }