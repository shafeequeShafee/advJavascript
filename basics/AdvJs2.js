//////////////  Iterables and Iterators  ////////////////

////  Iteration in JavaScript

// const str = "Shafeeque Rahman"

// for(let i=0 ; i<str.length ;i++){
//     console.log(str.charAt(i))
// }




// const arr = ["s","h","a","f","e","e","q","u","e"]

// for(let i=0 ; i<arr.length ;i++){
//     console.log(arr[i])
// }


//// own iterable for string and array
// const str = "Shafeeque Rahman"

// for(const char of str){
//     console.log(char)
// }




// const arr = ["s","h","a","f","e","e","q","u","e"]

// for(const item of arr){
//     console.log(item)
// }


//// creating iterable for obj

// const obj ={
//     [Symbol.iterator]:function(){
//         let step =0
//         const iterator={
//             next:function(){
//                 step++
//                 if(step ===1){
//                     return {
//                         value:'Hello',
//                         done:false
//                     }
//                 }
//                 else if(step===2){
//                     return {
//                         value:'World',
//                         done:false
//                     }
//                 }
//                 return {
//                     value:undefined,
//                     done:true
//                 }
                
//             }
//         }
//         return iterator
//     }
// }


// for(const word of obj){
//     console.log(word)
// }



//////////////  Generator  ////////////////

/// iterator using generatorfunction

// function normalFunction(){
//     console.log('Hello')
//     console.log('World')
// }
// // normalFunction()
// // normalFunction()

// function* generatorFunction(){
//       yield 'Hello'  
//       yield 'world'
// }

// const generatorObject = generatorFunction()
// for (const word of generatorObject){
//     console.log(word)
// }
