function cake(input){
    let index=0;
    let length =Number(input[index]);
    index++;
    let width =Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let CakeSize = length*width;
    let isHaveCake = true;

    while(command !== "STOP"){
        let pieces = Number(command);
        CakeSize-= pieces;

        if(CakeSize<=0){ 
            console.log(`No more cake left! You need ${Math.abs(CakeSize)} pieces more.`);
            isHaveCake = false;
            break;
        }
        command = input[index];
        index++;
    }
    if(isHaveCake){
        console.log(`${Math.abs(CakeSize)} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

