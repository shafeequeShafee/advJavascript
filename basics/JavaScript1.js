console.log("Hello World!")

///////////// Variables //////////////
let num=4
let user="sfq's world"
console.log(num)
num=10
console.log(num + 1)
console.log(user)
/////////// Constants//////////////////////

let radius =5
const  pi =3.14
let area
// pi= 5 not possible , constant cannot change
area = pi * radius * radius
console.log('area:',area)

////////// Data Types ///////////////

// ********** Number **************
let data = 8 // number
let name = 'sfq' // string
// primitive - number , string, boolean , Null, Undefined , Symbol
// object -
let num1 = 200
console.log('multi:',num1 * 10)
console.log('type:',typeof(num1))
//// hexadecimel define cheyumbol first => 0x
let hexadecimel = 0xf
console.log(hexadecimel)
console.log('type:',typeof hexadecimel)

/// 10 * 10^3
let exponential = 10e3
console.log(exponential)

let num2 = 100_00_000
console.log(num2)

let num3 = 5/0
console.log(num3)

let num4 = -5/0
console.log(num4)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

let num5 =1055555555555555555555555555555551 
console.log('number',num5)
/// // bigint => n last add cheyyukkaaa
let num6 =1055555555555555555555555555555551n 
console.log('bignumber',num6)
console.log(num6 + 4n)

let num7 =5
console.log(num7 / "sfq")
console.log(typeof( num7 / "sfq"))

// *********** String **************
let msg ="hi sfq"
console.log(msg)
console.log(typeof(msg))

let firstName ='sfq'
let lastName ='O'
// + operator => concatinating  strings when it is in string type 
let fullName = firstName + " " + lastName
console.log(fullName)

let msg2 = 'hi shafeeque , how is going on "Team Diy" '
console.log(msg2)
let msg3 = "hi shafeeque , how is going on \"Team Diy\""  //   \ escape character => cancel the special meaning of it
console.log(msg3)

let msg4 = 'hi shafeeque , \n how is going on "Team Diy" ' //  \n new line 
console.log(msg4)

let msg5 = 'hi shafeeque , \t how is going on "Team Diy" ' //  \t for tap
console.log(msg5)

let msg6 = 'hi shafeeque , \v how is going on "Team Diy" ' //  \v for vertical
console.log(msg6)

let msg7 = 'hi sf\bfq ,  how is going on "Team Diy" ' //  \b for deleting extra character
console.log(msg7)

// ********** Boolean **************
let bool = 5 >6
console.log(bool)
console.log(typeof bool)

// ********** Null **************  +> iempty or does not exist
let cake = null
console.log(cake)
console.log(typeof cake)

// ********** undefined **************
let bike
console.log(bike)
console.log(typeof bike)

////// NaN => NOT A NUMBER
