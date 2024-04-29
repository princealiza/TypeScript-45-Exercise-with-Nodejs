// Creating Array
let userNames = ["Ali", "Amir", "Admin", "Tahir"];

// Using forEach loop in Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})