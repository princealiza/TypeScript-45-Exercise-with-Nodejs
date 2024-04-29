// Array of current_users
let current_users = ["Aqsa", "Nida", "Ali", "Nimra", "Saad"];

// Array of new_users
let new_users = ["Alishba", "Aqsa", "Mutahira", "Ali", "Nimra"];

// Loop through a new_users to check the usernames avalaibility
new_users.forEach(new_one_users => {
  
// Making a condition for username already exit and save in our_cpndition variable  
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase());

// Print different messages using If-Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`This usernames ${new_one_users}, is available`)
    }
})