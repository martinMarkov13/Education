function yardGreening(input){
    let rabotnaPlosht = Number(input[0]);
    let discount = (rabotnaPlosht * 7.61) * 0.18
    let krainaCena = (rabotnaPlosht * 7.61) - discount
    
    console.log(`The final price is: ${krainaCena} lv.`)
    console.log(`The discount is: ${discount} lv. `)
}
yardGreening(["1"])