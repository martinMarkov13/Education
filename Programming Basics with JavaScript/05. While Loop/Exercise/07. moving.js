function moving(input){
    let index=0;
    let w = input[index];
    index++;
    let l = input[index];
    index++;
    let h = input[index];
    index++;
    let command = input[index];
    index++;
    let flatSize = w * l * h;
    let isHaveSpace = true;

    while(command !== "Done"){
        let boxes = Number(command);
        flatSize -= boxes;

        if(flatSize<=0){
            console.log(`No more free space! You need ${Math.abs(flatSize)} Cubic meters more.`);
            isHaveSpace = false;
            break;
        }
        command = input[index];
        index++;
    }
    if(isHaveSpace){
        console.log(`${Math.abs(flatSize)} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

