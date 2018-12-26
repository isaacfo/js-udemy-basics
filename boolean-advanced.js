let isAccountLocked = false
let userRole = 'admin'



if (isAccountLocked) {
    console.log('account locked')
} else if (userRole === 'admin')  {
    console.log('Welcom admin')
} else {
    console.log('Welcome')
}


// Challenge area

let temp = 95

if (temp <=32) {
    console.log('It is freezing outside!')
} else if (temp >= 90) {
    console.log('it is hot outside!')
} else {
    console.log('Go for it. It is pretty nice.')
}