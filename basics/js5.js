////////  Object in js ///////////////

//Object literals
let sfq ={}
console.log(sfq)
console.log(typeof sfq)


let input = 'name'
let sfq1 ={
    name:'sfq',
    technology:'vue',
    'work exp':6
}
console.log(sfq1)
console.log(sfq1.name)
console.log(sfq1['name'])
console.log(sfq1['work exp'])
console.log(sfq1[input])

let alien = {
    name:'sfq',
    tech:'js',
    laptop:{
        brand :'dell',
        cpu: 'i3',
        ram:12
    },
    mobile:{
        brand :'Redmi',
        rom: 64,
        ram:8
    }
}
console.log(alien)
console.log(alien.tech)
console.log(alien.laptop)
console.log(alien.laptop.brand)
console.log(alien.laptop.brand.length)


// ? mark

// console.log(alien.laptop.brand1 ?.length)

// delete
delete alien.laptop
console.log(alien)

//  For in loop

for(let key in alien){
    console.log(key, alien[key])
}

console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')



