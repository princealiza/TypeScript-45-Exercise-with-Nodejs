var guestList = ["Aqsa", "Nida", "Mutahira"];
var dontCome = guestList[1];
console.log(dontCome, "nahi asakti");
guestList.splice(1, 1, "Ruha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me")); });
