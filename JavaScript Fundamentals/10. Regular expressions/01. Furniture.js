function furniture(input){
    let totalCost = 0;
    console.log(`Bought furniture:`)
    for(let line of input){
    if(line === "Purchase"){
    break;
    }
    let regex = />>(?<item>\w+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/
    let result = regex.exec(line)
    if(result !== null){
    totalCost += Number(result.groups.price) * Number(result.groups.quantity)
    console.log(result.groups.item)
    }
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`)
    }
    furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
    
    )