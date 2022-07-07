///////  Functions in js ////////////////

function greet() {
    return 'hiiiii sfq'
}
greet();

let str = greet()
console.log(str)


function greeting(user) {
    return ` hi ${user}!`
}
let user = "shafeeque"
let msg = greeting(user)
console.log(msg)

///// FUNCTION EXPRESSION //////

let add = function (num1, num2) {
    return num1 + num2
}

// treat add as function now

let result =add(10,6)
console.log(result)
console.log(add(5,6))

let sum = add
console.log(sum(10,20))

console.log(sum)

//// Local Global  Varriable 

function wishes(u) {
    let nums =10;
    console.log('num:',nums)
    console.log('names:',names)
    return ` hi ${u}!`
}
let names = "shafeeque"
let msges = greeting(names)
console.log('msg:',msges)
// console.log('value of num is' +num) not working because it is a local varriable

function adding(num1,num2,num3){      // parameters
    console.log(num1,num2,num3)
    return num1 + num2 + num3
}

// let results = adding(2,3)
let results = adding(2,3,5)
console.log(results)