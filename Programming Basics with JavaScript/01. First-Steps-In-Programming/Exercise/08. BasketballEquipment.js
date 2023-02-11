function BasketballEquipment(input){
    let godishnaCenaTrenirovki = Number(input[0])
    let kecove = godishnaCenaTrenirovki - (0.4*godishnaCenaTrenirovki)
    let ekip = kecove - (0.2 * kecove)
    let topka =  0.25 * ekip
    let aksesoari = 0.20 * topka
    let cenaEkipirovka = godishnaCenaTrenirovki + kecove + ekip + topka + aksesoari
    console.log(cenaEkipirovka)
}
BasketballEquipment(["365"])