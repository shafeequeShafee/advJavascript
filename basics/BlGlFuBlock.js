///// JavaScript has 3 types of scope:  ///////
// Block scope
// Function scope
// Global scope




////// Block Scope  /////
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// let um const um block scope provide cheyunnu
{
    let x = 2;
    const y =5
}
  // x can NOT be used here
// console.log('x',x)
// console.log('y',y)

/// var use cheyyaam
{
    var z = 2;
}
console.log('z',z)
  // x CAN be used here




//////////  Function scope ///////////

// let , var , const ethokkae function scope aaa
// Local Scope
// Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName
let carName2 ="Punch"
function myFunction() {
    // let carName = "Volvo";  // ok 1 working
    // code here CAN use carName
    //console.log('carName:',carName)  // ok 1 working

    let carName = carName2;  // ok 2 working
    //code here CAN use carName
    console.log('carName:',carName)  // ok 2 working
}
// code here can NOT use carName
//console.log('carName:',carName) // not working
myFunction()

// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

function myFunction() {
    var carName = "Volvo1";   // Function Scope
    console.log(carName)
}

function myFunction() {
    let carName = "Volvo2";   // Function Scope
    console.log(carName)
}

function myFunction() {
    const carName = "Volvo3";   // Function Scope
    console.log(carName)
}
myFunction()  //// same name il annekil last declare cheytha function vilikkum





////////////Global Scope /////////
//Variables declared Globally (outside any function) have Global Scope.
// ellam let, const , var