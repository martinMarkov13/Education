function race(input){
    let racers = {};
    let names = input.shift().split(", ")
    for( let line of input){
    if(line !== "end of race"){
     let racer = line.match(/[A-Za-z]/g).join("")
     let distanceNumbers = line.match(/\d/g)
     let distance = 0;
     for(let num of distanceNumbers){
     distance += Number(num)
     }
    if(names.includes(racer)){
        if(racers.hasOwnProperty(racer)){
      racers[racer] += distance;
      }else{
      racers[racer] = distance;
      }
    }
    }
    }
    let sorted = Object.keys(racers).sort((a,b)=>racers[b]-racers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)
    }
    race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    )