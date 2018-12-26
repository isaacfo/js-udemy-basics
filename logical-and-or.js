let temp = 55

//  logical and && Operator
// True if both sides true, false otherwise

if (temp >= 60 && temp <=90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >=120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do whatever')
}
// Logical or || Operator
// Ture if at least one side is true, false otherwise
// || means or




// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? message to print - only offer vegan dishes
// At least on vegan? Offer some vegan options
// Else, offer anything on menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options')
} else {
    console.log('Offer anything on the menu')
}
