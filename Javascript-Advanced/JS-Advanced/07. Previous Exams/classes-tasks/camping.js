class SummerCamp {
    constructor(organizer, location) {
      this.organizer = organizer;
      this.location = location;
      this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
      this.listOfParticipants = [];
    }
  
    registerParticipant(name, condition, money) {
      money = Number(money);
      if (!this.priceForTheCamp.hasOwnProperty(condition)) {
        throw new Error("Unsuccessful registration at the camp.");
      }
      if (this.listOfParticipants.some((p) => p.name == name)) {
        return `The ${name} is already registered at the camp.`;
      }
      if (money < this.priceForTheCamp[condition]) {
        return `The money is not enough to pay the stay at the camp.`;
      }
      this.listOfParticipants.push({
        name,
        condition,
        power: 100,
        wins: 0,
      });
      return `The ${name} was successfully registered.`;
    }
  
    unregisterParticipant(name) {
      let participant = this.listOfParticipants.find((p) => (p.name == name));
      if (participant == undefined) {
        throw new Error(`The ${name} is not registered in the camp.`);
      } else {
        this.listOfParticipants.splice(
          this.listOfParticipants.indexOf(participant),
          1
        );
      }
      return `The ${name} removed successfully.`;
    }
  
    timeToPlay(typeOfGame, participant1, participant2) {
      let player1 = this.listOfParticipants.find(x => x.name == participant1);
      let player2 = this.listOfParticipants.find(x => x.name == participant2);

      if (typeOfGame == 'WaterBalloonFights') {
  
          if (player1 == undefined || player2 == undefined) {
              throw new Error(`Invalid entered name/s.`);
          }
  
          if (player1.condition != player2.condition) {
              throw new Error(`Choose players with equal condition.`);
          }
  
          let isFirstWin = player1.power > player2.power;
          let isSecondWin = player2.power > player1.power;
  
          if (isFirstWin) {
  
              player1.wins++;
              return `The ${player1.name} is winner in the game ${typeOfGame}.`;
          } else if (isSecondWin) {
  
              player2.wins++;
              return `The ${player2.name} is winner in the game ${typeOfGame}.`;
          } else {
              return `There is no winner.`
          }
      }
  
      if (typeOfGame == 'Battleship') {
          if (player1 == undefined) {
              throw new Error(`Invalid entered name/s.`);
          }
  
          player1.power += 20;
          return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
      }
  }
  
    toString() {
      let result = [
        `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
      ];
      this.listOfParticipants
        .sort((a, b) => b.wins - a.wins)
        .forEach((p) =>
          result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        );
  
      return result.join("\n");
    }
  }
  const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
  console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
  console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
  console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
  //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
  console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
  console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
  
  console.log(summerCamp.toString());
  
  
