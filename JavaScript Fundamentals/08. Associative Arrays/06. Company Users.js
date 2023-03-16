function companyUsers(input){
    let listOfCompanies = {};
for (let line of input) {
    let [company,user] = line.split(" -> ")
    if(!listOfCompanies.hasOwnProperty(company)){
        listOfCompanies[company]=[];
    }
    if(!listOfCompanies[company].includes(user)){
        listOfCompanies[company].push(user);
    }
}
let sorted = Object.keys(listOfCompanies).sort((a,b)=>a.localeCompare(b));

for (let company of sorted) {
    console.log(company)
    for (let user of listOfCompanies[company]) {
        console.log(`-- ${user}`)
    }
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )