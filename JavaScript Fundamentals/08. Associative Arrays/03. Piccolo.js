function piccolo(input){
    let parking = new Set();

    for (let index = 0; index < input.length; index++) {
        let command = input[index];
        let [direction,number] = command.split(", ");
    
        if(direction === "IN"){
            parking.add(number) 
        }else{
            parking.delete(number)
        }
    }
    if(parking.size === 0){
        console.log(`Parking Lot is Empty`);
    }else{
    let result = Array.from(parking).sort()
    for (let car of result) {
        console.log(car);
    }
}
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)