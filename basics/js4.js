////// Template Literal ///////

let num1 = 10
let num2 = 4
let result = num1 + num2
// console.log('result:',"the addition of " + num1 + " and " + num2 + " is " +result)
console.log('result:', `the addition of ${num1} and ${num2} is ${result}`)

console.log(`My name is 
sfq`)

console.log("My name is \n shafeeque")

////////////  LOOPS /////////////////

// while
// do while 
// for

console.log('hi')
console.log('hi')
console.log('hi')

// initialise , condition , increment

// while

let i = 1;
while (i <= 5) {
    console.log('hi sfq', i)
    i++;
}
console.log(i)

let y = 1;
///  do while

do {
    console.log('this is my world')
    y++;
}
while (y <= 5)

// for loop

for (let z = 0; z <= 5; z++) {
    console.log('this is my kingdom')
}
//////

let x = 1;
for (; x <= 5;) {
    console.log('this is my home')
    x++;
}

// loop inside loop

for (let f = 0; f <= 5; f++) {
    console.log('this is my everythings')

    for (let g = 0; g <= 5; g++) {
        console.log('this is my inside')
    }
}

/// 
for (let h = 1; h <= 100; h++) {
    if (h % 3 === 0) {
        console.log(h)
    }
}

let nums = 123456
while (nums > 0) {
    console.log('num',nums % 10)
    // to convert float to int
    nums = parseInt(nums / 10)
    
}


