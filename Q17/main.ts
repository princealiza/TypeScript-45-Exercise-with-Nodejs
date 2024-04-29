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

//Inform that only two guests can be invited for dinner
console.log("Unfortunetly, the new dinner table wont arrive on time, so I can only invite two guest to dinner with me");

//Using while loop to remove guest from the array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
//Sending a invitations to the last guest on the list
console.log("Invitation to the last 2 guests");
guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));

//Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);