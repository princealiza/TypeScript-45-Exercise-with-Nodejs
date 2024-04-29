let userNames = ["Ali", "Haider", "Amir", "Tahir", "Admin"];

userNames = []
if (userNames.length === 0){
    console.log("Your Array is empty we need to find some users!")
}else{
    // Using forEach loop in Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}