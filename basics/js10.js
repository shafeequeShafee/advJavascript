// Array Methos

////////////////    .forEach()   ////////////////////////

let nums = [7, 10, 9, 11, 100, 99, 77, 55]

for (let n of nums) {
    console.log(n)
}

for (let m in nums) {
    console.log('hii', nums[m])
}

// forEach() is function of array, which take each element at atime
// inside it we can define another function

// arrow functionil one argument annekil bracket idendaa avashyam illa
//  nums.forEach( n =>{
//     console.log(n * 10)
//  } )

console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

nums.forEach((n) => {
    console.log(n * 10)
})

// in arrow function you can pass value, index,array
nums.forEach((num, index, nums) => {
    console.log('num:' + num + ' i:' + index + ' array:' + nums)
})


////////////////////   .filter()   ////////////////////////

//filter basically take a parameter or takes argument , it will check for the condition, if it is true , send the value ahead
nums.forEach((x) => {
    console.log(x)
})

//  console.log(nums.filter( (num)=> num % 2 === 0 ))
console.log('ffffffffffffffffffffffffffffffffffffffffff')
let nums2 = [2, 5, 6, 10, 11, 12, 16, 15, 13, 18, 20]

console.log(nums2.filter((num) => num % 2 === 0))

console.log('hiiiiiiiiiiiiiiiii')

nums2.filter((num) =>
    num % 2 === 0
).forEach((num) => {
    console.log(num)
})


/////////////  .map()  ///////////////////////

console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')

// map it take a value and change the value


nums2.filter((num) =>
    num % 2 === 0
)
    .map((num) => num * 10)

    .forEach((num) => {
        console.log(num)
    })


//////// .reduce() ////////////////////
console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')

let result = nums2.filter((num) =>
    num % 2 === 0
)
    .map((num) => num * 10)

    .reduce((a, b) => a + b);

console.log(result)