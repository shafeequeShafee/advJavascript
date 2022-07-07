///////// Logical Operators ///////////

let x = 8, y = 7, z = 9
let result = x > y
console.log('result:', result)

// And .
// OR +
// Not ~

// in javascript 
// And &
// OR |
// Not !

let result2 = x > y && x > z
console.log('result2:', result2)

let result3 = x > y || x > z
console.log("result3:", result3)

let result4 = !result3
console.log('result4:', result4)

//////// Conditonal Operator //////////
// if else

let num1 = 10
let num2 = 9
let num3 = 7
let result5 = num1 > num2 && num1 > num3;
console.log('result5:', result5)

if (result5)
    console.log('num1 is greater:', num1);
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is greater :', num2);
}
else {
    console.log('num3 is greater :', num3);
    console.log('yaaaa')
}
// carelly bracket is optional if you have one statement
console.log('Bye.....')


///// Ternary Operator  //////////////

let num5 = 5
let result6

// if(num5 % 2 === 0){
//     result6 = "even"
// }
// else{
//     result6 = "odd"
// }
// console.log('result6:',result6)

// ? : ternary operator

result6 = num5 % 2 === 0 ? 'even' : 'odd'
console.log('result6:', result6)

////// Switch Statement /////////

let day = "holly day"

switch (day) {
    case 'Monday':
        console.log("7am")
        break;

    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4am")
        break;

    case 'Friday':
        console.log("8am")
        break;

    case 'Saturday':
    case 'Sunday':
        console.log("9am");
        break;
    default:
        console.log('happy Holiday')
}
console.log("bye...")