// Global ()
    // Local ()
        // Local (name)
    // Local

// Variable Shadowing in javascript.
// It's when a variable in a local scope uses its value instead of a variable in a parent scope
// so the local variables value is shadowing over the parents basically hiding it from existence 


// Leaked Global variable is when a variable that isnt defined or exists is reassigned, it will print where it is named and as a global variable as well

// let name = ' Andrew'


if (true) {
    // variable shadowing, mike was printed and not andrew
    // let name = 'Mike'
    
    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}


if (true) {
    console.log(name)
}



