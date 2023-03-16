function minerTask(mines){
 
    let result = {};
 
    for (let i = 0; i < mines.length; i += 2) {
        let mine = mines[i]
        let quantity = mines[i + 1]
        quantity = Number(quantity)
 
        if(result.hasOwnProperty(mine) === false){
            result[mine] = 0
        }
 
        result[mine] += quantity
    }
 
    let resultEntries = Object.entries(result)
 
    for (let [resource, quantity] of resultEntries) {
        console.log(`${resource} -> ${quantity}`);
        
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
    ])