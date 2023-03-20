function softUniBar(input){
    let totalIncome = 0;
    for(let line of input){
    if(line !== "end of shift"){
    let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^\d]*)?(?<price>\d+(\.\d+)?)\$/
        let person = line.match(regex)
     if(person !== null){
     totalIncome += Number(person.groups.count).toFixed(2) * Number(person.groups.price).toFixed(2)
     console.log(`${person.groups.customer}: ${person.groups.product} - ${(Number(person.groups.price* person.groups.count)).toFixed(2)}`)
     }
      }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
    }
    softUniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
    )