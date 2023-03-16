function partyTime(input) {
    //create two collections
let vipInvites = new Set();
let regularInvites= new Set();

// for every line of input, until party
while (input[0] !== "PARTY") {
    let guest = input.shift();
    // - ifinvitation si regular, add to regular List
   if (Number.isNaN(Number(guest[0]))) {
    regularInvites.add(guest)
   }else{
       // - otherwise add to VIP list
       vipInvites.add(guest)
   }
}
//for every remaining line
for (let guest of input) { 
    //- remove guest from  their respective list
    vipInvites.delete(guest);
    regularInvites.delete(guest);
}
//print sum of unused invites from both collections
console.log(vipInvites.size+ regularInvites.size);
//print unused VIP invites
for (let guest of vipInvites) {
    console.log(guest);
}
for (let guest of regularInvites) {
    console.log(guest);
}
//print unused regular invites

}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
