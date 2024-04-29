let guestList = ["Aqsa", "Nida", "Mutahira"];

let dontCome = guestList[1];

console.log(dontCome, "nahi asakti");

guestList.splice(1, 1, "Ruha");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me`));