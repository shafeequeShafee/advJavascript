//// For of loop with an Array in JavaScript

let nums=[];

nums[0]=5
nums[99]=9;
console.log(nums)
console.log(nums.length)

for(let n of nums){  // n is varriable which store one value at atime
    console.log(n)
}

// for in loop for object
// for of loop for array

// for(let key in nums){
//     console.log(key)
//     console.log(nums[key])
// }


// Array Destructing in Javascript
let nums2=[5,6,7,4,8,9]
console.log(nums2)
let a = nums2[0];

let [b,c,d,e,,g] =nums2
console.log(e)
console.log(g)

let nums3 = [5,7]
let x = 5;
let y = 7;

// swap two values using array destructuring
[x,y] =[y,x]
console.log(x,y) 

// aray of string
let words = "My name is sfq".split(' ');

let [j,k,l,m]= words;
console.log(words);
console.log(j,m);

let names = "my name is sfq rahman the great of all time".split(' ');
let [p,q,r,s,t,w,,...z] = names;
console.log(names)
console.log(p,q,r,s,t,w,z)
console.log(z)

