// Define function  with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich\n")
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo");
makeSandwich("Bread", "Mayonise", "Capsicum", "Tomato", "Onion");
makeSandwich("Bread", "Mayonise", "Chicken", "Capsicum", "Onion", "Tomato ketchup");