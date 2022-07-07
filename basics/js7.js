// Arrow Function
let wish = function () {
    console.log("hello sfq")
    return 1;
}
let wishing = wish()
console.log(wishing)

let greet = (name) => {
    console.log("hello " + name)
    return 1;
}
let names = "leena"
let greeting = greet(names)
console.log(greeting)

// only one statement ollokil pinnae carelly brackets onum vendaaa, athupollae return statement vendaaa

let greeted = (name) => "hello " + name
console.log('greeted:', greeted("sfq"))
// Functions in object is called methods

function GetFastLaptop(lapone, laptwo) {

    if (lapone.cpu > laptwo.cpu) {
        console.log(lapone)
    }
    else {
        console.log(laptwo)
    }

}

let laptop1 = {
    cpu: 'i7',
    ram: '12gb',
    brand: 'Dell',

    compare: function (other) {
        if (this.cpu > other.cpu) {
            console.log('this',this)
        }
        else {
            console.log('othr',other)
        }

    },

    getConfig: function () {
        // let name= "sfq"
        // console.log(name)

        //console.log(laptop.cpu)
        console.log(this.cpu)  // "this" represent the current object
    }
}
let laptop2 = {
    cpu: 'i5',
    ram: '4gb',
    brand: 'Acer',

    getConfig: function () {
        // let name= "sfq"
        // console.log(name)

        //console.log(laptop.cpu)
        console.log(this.cpu)  // "this" represent the current object
    }
}

laptop2.getConfig()

// this keyword

// if(laptop1.cpu >laptop2.cpu){
//     console.log(laptop1)
// }
// else{
//     console.log(laptop2)
// }

// GetFastLaptop(laptop1, laptop2)

laptop1.compare(laptop2)