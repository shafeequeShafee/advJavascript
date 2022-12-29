//////////// Nested function scope ////////////

// let a =10
// function outer(){
//     let b = 20
//     function inner(){
//         let c =30
//         console.log(a,b,c)
//     }

//     inner()
// }
// outer()









////////////  Closure /////////////


// A closure is the combination of a function bundled together (enclosed) with references
//  to its surrounding state (the lexical environment). In other words, 
// a closure gives you access to an outer function's scope from an inner function.


// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()




// function outer(){
//     let counter = 0
//     let value =0
//     value++
//     function inner(){
//         ///// let counter = 0  , ey value remember cheyooolla, athayath inner function ntae ulillannu declare cheythath.
//         counter++
//         console.log(counter, value)
//         ///// return value++  //// value remember cheyyannekil ath inner function ntae ulil change nthekillum veruthannam
//     }
//     return inner

//     ///// athayath inner function remember cheyyum counter ntae value
// }
// const fn =outer()
// fn()
// fn()
// fn()

////// in javascript, when we return a function from another function , we are effectively returning a 
  //// combination of the function definition along with the function's scope.This would let the function  
  //// definition have an associated persistent memory which could hold on to live data between executions. 
  //// That combination of the function and its scope chain is what is called a closure in javascript.








////////////   Function Currying ///////////

////// currying  is a process in functional programming in which we transform a function with multiple arguments
  //// into a sequence of nesting functions that take one argument at a time.
  //// function(a,b,c) is transformed to f(a)(b)(c)

// function sum(a,b,c){
//     return a + b + c
// }
// console.log(sum(5,10,15))




// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const curriedsum = curry(sum)
// console.log(curriedsum(10)(20)(30))


// const add2 = curriedsum(2)
// const add3 =add2(3)
// const add5= add3(5)
// console.log(add5)










/////////////////// this   //////////////////////

////// The JavaScript this keyword which is used in a function, refers to the object it belongs to. 
  //// It makes functions reusable by letting you decide the object value.
  //// this value is determined entirely by how a function is called.

//   function sayMyName(name){
//     console.log('my name is',name)
//   }
//   sayMyName('sfq')

///// implicit binding //

//   const person = {
//       name : "sfq",
//       ambition:"software engineer",
//       sayMyname: function(){
//         console.log(`my name is ${this.name}`)
//       }
//   }
//   person.sayMyname()




 ///// explicit binding //

// function sayMyAmbition(){
//     console.log(`my ambition is to become ${this.ambition}`)
// }
// sayMyAmbition.call(person) // everyfunction has a build in method named call which allow you to specify the context 
                          //with which a function is invoked.





///// new binding //  // constructor function

// function Person(name){
//     // this ={} ==> new create new empty object // we can add properties using this.name , this.age
//     this.name = name
// }

// const P1 = new Person("SFQ")
// const P2 = new Person("Mandu")

// console.log(P1.name, P2.name)






////// default binding //  // fallback binding

// function sayMyAge(){
//     console.log(`my age is to  ${this.age}`)
// }

// globalThis.age = 25  // keyword is relayed on global scope
// sayMyAge()








//////////////////  Prtotype ///////////////////

// function Person(fName,lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// const P1 = new Person('shafeeque', 'Rahman')
// const P2 = new Person('Amrutha', 'M')

////  javascript is a dynamic language , it allow us to attach new properties to object at any time
// P1.getFullName = function(){
//     return this.firstName +' '+ this.lastName
// }

// console.log(P1.getFullName())
////console.log(P2.getFullName()) // not defined

//// appo ath ellathinnum kittannekil prototype add cheyannam

// Person.prototype.getFullName = function(){
//     return this.firstName +' '+ this.lastName
// }

// console.log(P1.getFullName())
// console.log(P2.getFullName())



////// prototype inheritance //

// function Person(fName,lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function(){
//     return this.firstName +' '+ this.lastName
// }

// function SuperHero(fName,lName){
//   Person.call(this,fName,lName)
//   this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function(){
//   console.log('Fighting crime')
// }

// //// prototype chain
// SuperHero.prototype = Object.create(Person.prototype)

// SuperHero.prototype.constructor = SuperHero ////// otherwise javascript think  that SuperoHero created from
//                                               //// Person which is incorrect, SuperHero as inherited properties 
//                                               ////and methods from Person

// const Batman = new SuperHero('sfq','Rahman')
// console.log(Batman.getFullName())










///////////////////  Class keyword  ///////////////


// class Person{  //// function Person becomes class Person aayi
//   constructor(fName,lName){  /// initialisation of this object  moved into constructor
//     this.firstName = fName
//     this.lastName = lName
//   }
//   //// All methods on the  prototype  object are rereturn has  methods in the class
  
//   sayName(){
//     return this.firstName +' '+ this.lastName
//   }
// }

// ///// create instance of Person

// const classP1 = new Person("SFQ", "RAHMAN")
// console.log(classP1.sayName())

// ///// two keywords are take care of entire inheritance , extends and super  
// class SuperHero extends Person{
//   constructor(fName,lName){
//     super(fName,lName)  /// we invoke super method  // super we call Person class constructor.
//     this.isSuperHero = true
//   }

//   fightCrime(){
//     console.log("Fighting Crime")
//   }
// }

// const batman = new SuperHero("shaarvina" ,"vs")
// console.log(batman.sayName())



