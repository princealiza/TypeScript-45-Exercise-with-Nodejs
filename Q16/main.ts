//Creating a Guest List Array
let guestList = ["Aqsa", "Nida", "Mutahira",];

//Making variable for those guest who cant come
let dontCome = guestList[1];

//print the name of guest who cant come
console.log(dontCome, "Nahi asakti");

//Add or remove Values from Guest List Array
guestList.splice(0, 1, "Ruha");

//message Print for Bigger Dinner Table
console.log("Good News! We have found a Bigger Table for Dinner.");

//Adding a new guest at starting index of array
guestList.unshift("Ali");

//Adding a new guest at ending index of array
guestList.push("Habiba");

//Adding a new guest at middle index of array
let middleIndex: number = Math.floor(guestList.length/2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 1, "Hamza");

//Print message fir Updated Guest List
console.log("Updated List of our Guests");

//Sending a invitation message to our guests one by one with their names
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to Dinner with me?`));