// Array of current_users
var current_users = ["Aqsa", "Nida", "Ali", "Nimra", "Saad"];
// Array of new_users
var new_users = ["Alishba", "Aqsa", "Mutahira", "Ali", "Nimra"];
// Loop through a new_users to check the usernames avalaibility
new_users.forEach(function (new_one_users) {
    // Making a condition for username already exit and save in our_cpndition variable  
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    // Print different messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This usernames ".concat(new_one_users, ", is available"));
    }
});
