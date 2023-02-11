function FoodDelivery(input){
    let pileshkoMenu = Number(input[0])
    let ribnoMenu = Number(input[1])
    let vegiMenu = Number(input[2])

    let cenaPileshkiMenuta = pileshkoMenu * 10.35
    let cenaRibniMenuta = ribnoMenu * 12.40
    let cenaVegiMenuta = vegiMenu * 8.15
    let obshtaCenaMenuta = cenaPileshkiMenuta + cenaRibniMenuta + cenaVegiMenuta
    let cenaDesert = obshtaCenaMenuta * 0.20
    let cenaDostavka = 2.50
    let smetka = obshtaCenaMenuta + cenaDesert + cenaDostavka
    console.log(smetka)
}
FoodDelivery(["2 ",
"4 ",
"3 "]
)