function fruitShop(input){
    let fruit = input[0]
    let day = input[1]
    let quantity = input[2]
    let price = 0

    if(day ==="Monday" || day ==="Tuesday" || day === "Wednesday" || day === "Thursday" ||
     day === "Friday"){
        if(fruit==="banana"){
            price = quantity * 2.50
            console.log(price.toFixed(2))
        } else if(fruit === "apple"){
            price = quantity * 1.20;
            console.log(price.toFixed(2))
        } else if(fruit === "orange"){
            price =quantity*0.85
            console.log(price.toFixed(2))
        } else if(fruit === "grapefruit"){
            price =quantity*1.45;
            console.log(price.toFixed(2))
        } else if(fruit==="kiwi"){
            price =quantity * 2.70
            console.log(price.toFixed(2))
        } else if(fruit==="pineapple"){
            price = quantity * 5.50
            console.log(price.toFixed(2))
        } else if(fruit==="grapes"){
            price = quantity*3.85
            console.log(price.toFixed(2))
        }  
        else{
            console.log("error");
        }  
    } else if(day==="Saturday" || day==="Sunday"){
        if(fruit==="banana"){
            price = quantity * 2.70
            console.log(price.toFixed(2))
        } else if(fruit === "apple"){
            price = quantity * 1.25;
            console.log(price.toFixed(2))
        } else if(fruit === "orange"){
            price =quantity*0.90
            console.log(price.toFixed(2))
        } else if(fruit === "grapefruit"){
            price =quantity*1.60;
            console.log(price.toFixed(2))
        } else if(fruit==="kiwi"){
            price =quantity *3
            console.log(price.toFixed(2))
        } else if(fruit==="pineapple"){
            price = quantity * 5.60
            console.log(price.toFixed(2))
        } else if(fruit==="grapes"){
            price = quantity*4.20
            console.log(price.toFixed(2))
        }
        else{
            console.log("error");
    }
} else{
    console.log("error");
}
}
fruitShop(["apple","Monday","2"])