function plantDiscovery(input) {
    let plantsCount = Number(input.shift());
    let list = {};
    for (let i = 0; i < plantsCount; i++) {
      let plants = input.shift().split("<->");
      let plantName = plants[0];
      let rarity = Number(plants[1]);
  
      list[plantName] = {
        rarity,
        rating: []
      }
      if (list.hasOwnProperty(plantName)) {
        list[plantName].rarity = rarity;
      }
    }
    while (input[0] != "Exhibition") {
      let tokens = input.shift().split(": ");
      let command = tokens[0];
      let plantInfo = tokens[1].split(" - ");
      let name = plantInfo[0];
  
      if (list.hasOwnProperty(name)) {
        if (command == "Rate") {
          let rating = +plantInfo[1];
          list[name].rating.push(rating);
  
        } else if (command == "Update") {
          let rarity = +plantInfo[1]
          list[name].rarity = rarity;
        } else if (command == "Reset") {
          list[name].rating = [];
        }
      } else {
        console.log(`error`)
      }
    }
    console.log(`Plants for the exhibition:`)
    for (let currPlant in list) {
      let totalRating = 0;
      for (let rate of list[currPlant].rating) {
        totalRating += rate;
      }
      let averageRating=0
      if(list[currPlant].rating.length > 0){
       averageRating = totalRating / list[currPlant].rating.length
      }
      console.log(`- ${currPlant}; Rarity: ${list[currPlant].rarity}; Rating: ${averageRating.toFixed(2)}`)
    }
  }