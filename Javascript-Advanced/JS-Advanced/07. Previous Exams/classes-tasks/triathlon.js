class Triathlon {
    constructor(competitionName) {
      this.competitionName = competitionName;
      this.participants = {}; // representing a key-value pair of a participant name and its gender.
      this.listOfFinalists = [];
    }
  
    addParticipant(participantName, participantGender) {
      if (this.participants.hasOwnProperty(participantName)) {
        return `${participantName} has already been added to the list`;
      } else {
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
      }
    }
  
    completeness(participantName, condition) {
      if (!this.participants.hasOwnProperty(participantName)) {
        return `${participantName} is not in the current participants list`;
      } else {
        if (condition < 30) {
          throw new Error(
            `${participantName} is not well prepared and cannot finish any discipline`
          );
        }
      }
      if (condition / 30 < 3) {
        return `${participantName} could only complete ${Math.floor(
          condition / 30
        )} of the disciplines`;
      } else {
        this.listOfFinalists.push({
          name: participantName,
          gender: this.participants[participantName],
        });
      }
      delete this.participants[participantName];
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  
    rewarding(participantName) {
      let rewarded = [];
      for (let rewarder of this.listOfFinalists) {
        rewarded.push(rewarder.name);
      }
      if (!rewarded.includes(participantName)) {
        return `${participantName} is not in the current finalists list`;
      } else {
        return `${participantName} was rewarded with a trophy for his performance`;
      }
    }
  
    showRecord(criteria) {
      if (this.listOfFinalists.length == 0) {
        return `There are no finalists in this competition`;
      }
  
      if (criteria == "all") {
          let finalists = [];
          for (let row of this.listOfFinalists) {
              finalists.push(row.name);
          }
          let result = [`List of all ${this.competitionName} finalists:`];
           finalists.sort((a, b) => a.localeCompare(b)).forEach(finalist => result.push(finalist))
           return result.join("\n") 
      } else {
        for (const iterator of this.listOfFinalists) {
          if (iterator.gender !== criteria) {
            return `There are no ${this.participantGender}'s that finished the competition`;
          } else {
            return `${iterator.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
          }
        }
      }
    }
  }
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));
