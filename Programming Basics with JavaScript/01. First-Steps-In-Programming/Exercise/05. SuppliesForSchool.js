function SuppliesForSchool(input){
    let broiPaketHimikali = Number(input[0]) * 5.80
    let broiPaketMarkeri = Number (input[1]) * 7.20
    let litriPreparat = Number(input[2]) * 1.20
    let procentNamalenie = Number(input[3]) / 100
    let cenaMateriali = (broiPaketHimikali + broiPaketMarkeri + litriPreparat)
    let krainaSuma = cenaMateriali -(cenaMateriali*procentNamalenie)
    console.log(krainaSuma)
}
SuppliesForSchool(["2", "3", "4","25"])