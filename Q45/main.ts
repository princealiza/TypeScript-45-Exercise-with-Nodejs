// Define a function to create a car object with optional options... 
function create_car(manufacturer, model, ...options){
    // Initialize a car object  with manufacturer & model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add further options to car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

    // Call the function to create a car object
    let my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");

    // Print the variable to answer all the information 8s stored correctly 8n the car object
    console.log(my_car);
