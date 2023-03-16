function travelTime(input){
let travelList = {}
for (let line of input) {
    let [country,city,cost] = line.split(" > ")
    if(!travelList.hasOwnProperty(country)){
        travelList[country] = new Map();
    }
    if(travelList[country].has(city)){
        let oldPrice = travelList[country].get(city)
        if(oldPrice>cost){
            travelList[country].set(city,cost)
        }
    }else{
        travelList[country].set(city,cost)
    }
}
let sortedObj = Object.entries(travelList);
    sortedObj.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, map] of sortedObj) {
        let result = '';
        result += `${key} -> `;
        let sortedMap = Array.from(map.entries());
        sortedMap.sort((a, b) => a[1] - b[1]);
        for (let [key, value] of sortedMap) {
            result += `${key} -> ${value} `;
        }
        console.log(result);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )