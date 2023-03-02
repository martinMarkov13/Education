function addAndSubtract(num1,num2,num3) {
     function sum(num1,num2) {
        return num1+num2;      
    }
    function subtract(addResult, thirdNumber) {
        return addResult - thirdNumber;
    }
    
    let result = sum(num1,num2);
    let finalResult = subtract(result,num3);
    console.log(finalResult);
}
addAndSubtract(23,6,10 )