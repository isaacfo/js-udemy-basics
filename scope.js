// Javascript uses lexical scoping.
// This is sometimes referred to as (static scoping) and this is the idea that a variable defined in one
// part of your program might not be accessible everywhere else in your program

// Global scope- defined outside of all code blocks
// Local scope-  defigend in a code block


// In a scope you can access variables defined in that scope, or in any parent/ancestor
// So local scopes can access global scopes



// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour) varTwo is now a parent of varFour cuz four was nested in two 
    // Local Scope (varThree)
// Global Scope is the parent of the local scopes and the local scopes are siblings with one another 

let varOne = 'varOne'

// whats inside the curly braces is a code block
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo) // does print here, not outside the if statement tho, 

    if (true) {
        let varFour = 'varFour'
    }
}


console.log(varTwo)


if (true) {
    let varThree = 'varThree'
}


console.log(varThree)