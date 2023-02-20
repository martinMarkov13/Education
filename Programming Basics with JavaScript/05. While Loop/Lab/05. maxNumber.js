function maxNumber(input){
    let index = 0;
    let element = input[index];
    index++;
    let min = Number.MAX_SAFE_INTEGER;

    while(element !== "Stop"){
        let num = Number(element);
        if(num < min){
            min = num;
        }
        element=input[index];
        index++
    }
    console.log(min)
}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])




