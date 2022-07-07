/// Constructor function in javascript

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    this.work = function () {
        console.log('he/she is a amazing coder')
    }
    return this // return skip cheyyaam
}

let Alien1 = new Alien('sfq', 'js')
let Alien2 = new Alien('anu', 'java')

console.log('alien1:', Alien1)
console.log('alien2:', Alien2)

Alien1.tech = '.net'
console.log('alien1:', Alien1)
Alien1.work()

///  Creating Array and fetching elements in javascript

// let values = new Array();

let values = [1, 2, 3, 'sfq'];
console.log('values:', values)
console.log('length:', values.length)

let array1 = [1, 2, 3, 4];
array1.push(5)
array1.push(7)
console.log('array1:', array1)

let fetch = array1[1]
console.log('fetch:', fetch)

let names = new Array('SFQ', 'ANU')
console.log(names)
names[2] = 'MANDU'
console.log(names)

let Data = ['sfq', 5, { tech: 'js' }, function () {
    console.log('hello sfq')
}]
console.log(Data)
Data[3]()

// Array Methods in JavaScript
 let data2 =[1,2,3,4,5,6]

 console.log(data2)

 data2.push(7)
 console.log(data2)


console.log(data2.pop())  // pop remove last element added / last in first
console.log(data2)

console.log(data2.shift())  // remove the data from first
console.log(data2)

console.log(data2.unshift(1))  // add value infront of the array  / at first index
console.log(data2)

console.log(data2.splice(4))  
console.log(data2)

console.log(data2.splice(2,1))  // (index, number of values to remove)
console.log(data2)

let data3 =[1,2,3,4,5,6,7,8,9]
console.log(data3.splice(4,2,20)) //(index, number of values to remove, replacing value)
console.log(data3)

data3.push(10,11,12,13)
console.log(data3)