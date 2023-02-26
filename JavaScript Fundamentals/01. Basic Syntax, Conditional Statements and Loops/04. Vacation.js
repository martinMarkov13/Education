function vacation(peopleCount, groupType, dayOfWeek){
    let studentFridayPrice = 8.45;
    let businessFridayPrice = 10.9;
    let regularFridayPrice = 15;

    let studentSaturdayPrice = 9.8;
    let busienssSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;

    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.50;

    let totalPrice = 0;

    if(peopleCount>=100 && groupType === "Business"){
        peopleCount -= 10;
    }
    
    if(groupType === "Students"){
        if(dayOfWeek === "Friday"){
            totalPrice += peopleCount * studentFridayPrice;
        }else if(dayOfWeek === "Saturday"){
            totalPrice += peopleCount * studentSaturdayPrice;
        }else if(dayOfWeek === "Sunday"){
            totalPrice+= peopleCount* studentsSundayPrice;
        }
    }else if(groupType === "Business"){
        if(dayOfWeek === "Friday"){
            totalPrice+= peopleCount*businessFridayPrice;
        }else if(dayOfWeek === "Saturday"){
            totalPrice += peopleCount*busienssSaturdayPrice;
        }else if(dayOfWeek === "Sunday"){
            totalPrice+=peopleCount*businessSundayPrice;
        }
    }else if(groupType === "Regular"){
        if(dayOfWeek === "Friday"){
            totalPrice += peopleCount*regularFridayPrice;
        }else if(dayOfWeek=== "Saturday"){
            totalPrice+= peopleCount* regularSaturdayPrice;
        }else if (dayOfWeek=== "Sunday"){
            totalPrice+=peopleCount*regularSundayPrice;
        }
    }
        
    if(groupType === "Students" && peopleCount >=30){
        totalPrice = totalPrice*0.85;
    }else if(groupType === "Regular" && peopleCount>=10 && peopleCount<=20){
        totalPrice = totalPrice *0.95;
    }
console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")


