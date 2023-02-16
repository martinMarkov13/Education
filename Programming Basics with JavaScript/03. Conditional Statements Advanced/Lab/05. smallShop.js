function smallShop(input){
    let city = input[1]
    let product = input[0]
    let quantity =Number(input[2])
    let price = 0

    if(city==="Sofia"){
        switch(product){
            case "coffee": price = 0.50 * quantity; break
            case "water": price = 0.80 * quantity; break
            case "beer": price = 1.20 * quantity;break
            case "sweets": price = 1.45 * quantity; break
            case "peanuts": price = 1.60 * quantity;break
        } 
        console.log(price) 
    } else if(city==="Plovdiv"){
        switch(product){
            case "coffee": price = 0.40 * quantity; break
            case "water": price = 0.70 * quantity; break
            case "beer": price = 1.15 * quantity;break
            case "sweets": price = 1.30 * quantity; break
            case "peanuts": price = 1.50 * quantity;break
        }
        console.log(price)
    } else if(city=== "Varna"){
        switch(product){
        case "coffee": price = 0.45 * quantity; break
        case "water": price = 0.70 * quantity; break
        case "beer": price = 1.10 * quantity;break
        case "sweets": price = 1.35 * quantity; break
        case "peanuts": price = 1.55 * quantity;break
        }
        console.log(price)

    }
}
smallShop(["sweets",
"Sofia",
"2.23"])

