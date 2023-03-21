function thePianist(input) {
    let numberOfPieces = Number(input.shift());
    let list = {};
    for (let i = 0; i < numberOfPieces; i++) {
      let [piece,composer,key] = input.shift().split("|");
      list[piece] = {
        composer,
        key
      }
    }
    while (input[0] != "Stop") {
      let line = input.shift().split("|");
      let command = line[0];
      let piece = line[1];
      let composer = line[2];
      let key = line[3];
      if (command === "Add") {
        if (list.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`)
        } else {
          list[piece] = {
            composer,
            key
          }
          console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }
      } else if (command == "Remove") {
        if (list.hasOwnProperty(piece)) {
          delete list[piece]
          console.log(`Successfully removed ${piece}!`)
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      } else if (command == "ChangeKey") {
        if (list.hasOwnProperty(piece)) {
          list[piece].key = line[2]
          console.log(`Changed the key of ${piece} to ${line[2]}!`)
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      }
    }
  let entries = Object.entries(list)
  
  for(let [name,properties] of entries){
  console.log(`${name} -> Composer: ${properties.composer}, Key: ${properties.key}`)
  }
  }