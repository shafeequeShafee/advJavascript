const arr =[1,2,3,4,5,6,7,8,9,10]
console.log("array: ",arr)
// array destructuring 
const [k,l,m,o]=arr
console.log(`array destructuring :   k:${k},  l:${l},   m:${m},  o:${o}`)

//array destructuring and rest operator
const [a,b,c,...d]=arr
console.log(`rest operator :    a:${a},  b:${b},   c:${c},  d:${d}`)

//spread operator
console.log("spread operator",...arr)


const objArray =[
    {
        name:"shaarvi",
        position:"ui developer",
        company:"claysys"
    },
    {
        name:"boss",
        position:"software developer",
        company:"claysys"
    },
    {
        name:"tintu",
        position:"software developer",
        company:"claysys"
    },
    {
        name:"vipin",
        position:"software developer",
        company:"claysys"
    }
]

console.log("Objarray: ",objArray)

// array destructuring  /////

const [shaarvi,boss,tintu,vipin]=objArray
console.log(`array destructuring :   shaarvi:${shaarvi},  boss:${boss},  tintu:${tintu}   vipin:${vipin}`)
console.log(shaarvi)
console.log(vipin)



//array destructuring and rest operator
const [shaar,bos,...employ]=objArray
console.log(`rest operator :    shaarvi:${shaar},  boss:${bos},   employee:${employ}`)
console.log("employ: ",employ)


//spread operator
console.log("spread operator",...objArray)

////

const sfq={
   company:"claysys",
   position:"Software Developer",
   project:"Spave"
}

const employfullDetails={
    ...sfq,
    place:"chungathara",
    ctc:2.8
}
console.log(employfullDetails)
const array ={...sfq}
console.log("array: ",array)
console.log("sfq :",sfq)
const array2 ={sfq}
console.log("array2: ",array2)