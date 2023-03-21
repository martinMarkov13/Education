function pirates(input) {
    let list = {}
    while (input[0] !== "Sail" && input[0] !== "End") {
      let city = input.shift().split("||")
      let name = city[0];
      let population = Number(city[1])
      let gold = Number(city[2])
   
      if (!list.hasOwnProperty(name)) {
        list[name] = {
          population,
          gold
        }
      } else {
        list[name].population += population
        list[name].gold += gold
      }
    }
    input.shift()
    while (input[0] !== "End") {
      let line = input.shift().split("=>")
      let command = line[0];
      let targetCity = line[1];
   
      if (command == "Plunder") {
        let killed = Number(line[2]);
        let stolen = Number(line[3]);
        list[targetCity].population -= killed;
        list[targetCity].gold -= stolen;
        console.log(`${targetCity} plundered! ${stolen} gold stolen, ${killed} citizens killed.`)
        if (list[targetCity].gold == 0 || list[targetCity].population == 0) {
          console.log(`${targetCity} has been wiped off the map!`)
          delete list[targetCity]
        }
      } else if (command == "Prosper") {
        let increase = Number(line[2]);
        if (increase < 0) {
          console.log(`Gold added cannot be a negative number!`)
        } else {
          list[targetCity].gold += increase;
          console.log(`${increase} gold added to the city treasury. ${targetCity} now has ${list[targetCity].gold} gold.`)
        }
      }
    }
    let entries = Object.entries(list)
   
    if (entries.length == 0) {
      console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
      console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`)
      for (let [name, properties] of entries) {
        console.log(`${name} -> Population: ${properties.population} citizens, Gold: ${properties.gold} kg`)
      }
    }
  }