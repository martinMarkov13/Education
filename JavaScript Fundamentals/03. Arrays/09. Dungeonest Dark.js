function dungeonestDark(input) {
    let rooms = input[0].split("|")
    let health = 100;
    let coins = 0;

    for (let index = 0; index < rooms.length; index++) {
        let room = rooms[index].split(" ")
        if (room[0] === "potion") {
            if (health + Number(room[1]) >= 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                health += Number(room[1])
                console.log(`You healed for ${room[1]} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (room[0] === "chest") {
            coins += Number(room[1]);
            console.log(`You found ${room[1]} coins.`);
        } else {
            health -= Number(room[1]);
            if (health > 0) {
                console.log(`You slayed ${room[0]}.`);
            } else {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${index + 1}`);
                break;
            }
        }
        if (index === rooms.length - 1) {
            console.log("You've made it!");
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])