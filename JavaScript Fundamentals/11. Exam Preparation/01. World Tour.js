function worldTour(input) {
    let stops = input.shift();
  
    while (input[0] !== "Travel") {
      let tokens = input.shift().split(":");
      let command = tokens[0];
      if (command == "Add Stop") {
        let index = Number(tokens[1]);
        let destination = tokens[2];
        if (index >= 0 && index < stops.length) {
          let leftSide = stops.slice(0, index);
          let rightSide = stops.slice(index, );
          stops = leftSide + destination + rightSide
        }
        console.log(stops)
      } else if (command == "Remove Stop") {
        let startingIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        if (startingIndex >= 0 && startingIndex < stops.length) {
          if (endIndex >= startingIndex && endIndex < stops.length) {
            let leftSide = stops.slice(0, startingIndex);
            let rightSide = stops.slice(endIndex + 1, );
            stops = leftSide + rightSide;
          }
        }
        console.log(stops)
      } else if (command == "Switch") {
        let oldDestination = tokens[1];
        let newDestination = tokens[2];
        if (stops.includes(oldDestination)) {
          stops = stops.replace(oldDestination, newDestination);
        }
        console.log(stops)
      }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
  }