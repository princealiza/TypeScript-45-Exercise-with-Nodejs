// Making a Array of Countries and Prints its Orginal Order
let countriesToVisit: string [] = ["Egypt", "Italy", "China", "Australia"];
console.log("Original Order:",countriesToVisit);

// Print tbe Array in Alphabetical Orders without modifying the Actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//show the array is still in its original order
console.log("Still in original order:", countriesToVisit);

// Print the Array in Reverse Order without modifying the Actual list
console.log("Reverse Order:",[...countriesToVisit].reverse()); 

// Show the Array is still in its Original Order
console.log("Still in original order:", countriesToVisit);

// We have change the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//Print the array to show that its back to its Original Order
console.log("Back to original order", countriesToVisit.reverse());

//Print the array to show that its Order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have change again the Original Array Order Now
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
