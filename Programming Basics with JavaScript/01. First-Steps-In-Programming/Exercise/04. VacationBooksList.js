function VacationBooksList(input){
    let KnigaStranici = Number(input[0]);
    let StraniciNaChas = Number(input[1]);
    let DniZaKniga = Number (input[2]);

    let ChasoveNaKniga = KnigaStranici / StraniciNaChas
    let ChasoveNaDen = ChasoveNaKniga / DniZaKniga
    console.log(ChasoveNaDen)
}
VacationBooksList(["432", "15", "4"])