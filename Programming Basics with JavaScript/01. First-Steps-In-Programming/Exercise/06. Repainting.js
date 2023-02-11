function repainting(input){
    let neobhodimNailon = Number(input[0]);
    let neobhodimaBoq = Number(input[1]);
    let kolichestvoRazreditel = Number(input[2]);
    let neobhodimiChasove = Number(input[3]);

    let obshtoNailon = neobhodimNailon + 2
    let obshtoBoq = neobhodimaBoq + (0.1* neobhodimaBoq)
    let obshtoMateriali = obshtoNailon * 1.5 + obshtoBoq * 14.50 + kolichestvoRazreditel * 5 + 0.40
    let sumaMaistori = (obshtoMateriali* 0.30)*neobhodimiChasove
    let krainaCena = sumaMaistori + obshtoMateriali
 
    console.log(krainaCena)
}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)


