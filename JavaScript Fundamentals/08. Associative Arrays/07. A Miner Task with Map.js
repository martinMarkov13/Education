function minerTask(input){
    let myMap = new Map();

for(let i=0; i<input.length; i+=2){
    let mine = input[i];
    let quantity =Number(input[i+1]);

    if(!myMap.has(mine)){
        myMap.set(mine,quantity)
    }else{
        let currQuantity = myMap.get(mine);
        let newQuantity = currQuantity + quantity;
        myMap.set(mine, newQuantity);
    }
}

let result = Array.from(myMap.entries());

for (let [product,quantity] of result) {
    console.log(`${product} -> ${quantity}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )