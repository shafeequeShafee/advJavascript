//////////  Conversion //////////////

let num = String(6)
console.log(num)
console.log(typeof num)

let num2= Number("10")
console.log(num2,typeof num2)

let x
x = 8
console.log(x,typeof x)

x = x + ""
console.log(x,typeof x)

x = x + 2
console.log(x,typeof x)

x = x - 2
console.log(x,typeof x)

x = +x + 2
console.log(x,typeof x)

x = !x
console.log(x,typeof x)

console.log(Boolean(7))  //true
console.log(Boolean(0))  // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean("sfq")) // true

let y = "123 sfq"
console.log(y,typeof y)

let z = Number("123 sfq")
console.log(z,typeof z)

let z1 = parseInt("123 sfq")
console.log(z1,typeof z1)

let z2 = parseInt("z123 sfq")
console.log(z2,typeof z2)


///////// Arithematic Operators //////////////

let num3 = 5
let num4 = 4
let result = num3 + num4
console.log('result',result)

let remainder = num3 % num4
console.log(remainder)

let num5 =true
let num6 = true
let logic = num5 + num6
console.log('logic',logic)  // 2 because 0-false 1-true

let num7 =2
// num7 = num7 + 3
num7 += 3
console.log(num7)
 num7++
 console.log(num7)

num7= 2 
 ++num7 //pre increment
 console.log(num7)

 num7= 2 
 num7++ //post increment
 console.log(num7)

 num7=2
 let a =num7++  // num++ is called post increment  , first assign the value and then increment
 console.log(a,num7)

 num7=2
 let b = ++num7  // num++ is called pre increment  , first increment the value and then assign the value
 console.log(b,num7)

 let c= 2
 let cube = c*c*c
 console.log(cube)
 let cube2 =Math.pow(2,3)
 console.log(cube2)
 let cube3 = 2**3
 console.log(cube3)

 //////// Relational Operators ///////////
 console.log(5 > 6)
 let data = 7 > 6
 console.log(data)
 let data2 = 6 <= 6
 console.log(data2)

 let d ="pen"
 let e ="book"
 let data3 = d > e
 console.log(data3)

 let f ="pen"
 let g ="pencil"
 let data4 = f > g
 console.log(data4)

 let i ="2"
 let j =1
 let data5 = i > j
 console.log(data5)

 let k =3
 let l =3
 let data6 = k == l
 console.log(data6)

 let m =3
 let n ="3"
 let data7 = m == n
 console.log(data7)

 let o =3
 let p ="3"
 let data8 = o === p
 console.log(data8)

 let q =''  // empty string is false
 let r =false
 let data9 = q === r
 console.log(data9)