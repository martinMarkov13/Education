function building(input) {
    let maxFloors = Number(input[0]);
    let maxRooms = Number(input[1]);

 
    for (let floor = maxFloors; floor > 0; floor--) {
        let floorString = "";
        for (let room = 0; room < maxRooms; room++) {
            if (floor == maxFloors) {
                floorString += "L" + floor + room + " ";
            } else if (floor % 2 == 0) {
                floorString += "O" + floor + room + " ";
            } else {
                floorString += "A" + floor + room + " ";
            }
        }
        console.log(floorString);
    }
}
building(["6", "4"])