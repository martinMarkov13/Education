function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let musala = 0;
    let montblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for (let i = 0; i < groups; i++) {
        let groupSize = Number(input[index]);
        index++;
        total += groupSize;
        if (groupSize <= 5) {
            musala += groupSize;
        } else if (groupSize >= 6 && groupSize <= 12) {
            montblan += groupSize;
        } else if (groupSize >= 13 && groupSize <= 25) {
            kilimanjaro += groupSize;
        } else if (groupSize >= 26 && groupSize <= 40) {
            k2 += groupSize;
        } else {
            everest += groupSize;
        }
    }

    let musalaPercent = musala / total * 100;
    let montblanPercent = montblan / total * 100;
    let kilimanjaroPercent = kilimanjaro / total * 100;
    let k2Percent = k2 / total * 100;
    let everestPercent = everest / total * 100;

    console.log(musalaPercent.toFixed(2) + `%`);
    console.log(montblanPercent.toFixed(2) + `%`);
    console.log(kilimanjaroPercent.toFixed(2) + `%`);
    console.log(k2Percent.toFixed(2) + `%`);
    console.log(everestPercent.toFixed(2) + `%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
