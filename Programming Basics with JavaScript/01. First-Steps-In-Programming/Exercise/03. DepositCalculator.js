function DepositCalculator(input){
    let DepoziranaSuma = Number(input[0]);
    let SrokNaDepozita = Number(input[1]);
    let GodishenLihvenProcent = Number(input[2]);

    let GodishnaLihva = DepoziranaSuma * GodishenLihvenProcent/100;
    let MesechnaLihva = GodishnaLihva / 12;
    let Rezultat = DepoziranaSuma + (SrokNaDepozita * MesechnaLihva);
    console.log(Rezultat);
}
DepositCalculator(["200", "3", "5.7" ])