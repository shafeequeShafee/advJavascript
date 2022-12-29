let person = {
    firstName: 'sfq',
    lastName: 'rahman'
};

////Prior to ES6, when you want to assign properties of the person object to variables, you typically do it like this:
// let firstName = person.firstName;
// let lastName = person.lastName; 


// this is obj destructuring
// let { firstName: firstName, lastName: lastName } = person;
// console.log(firstName)


let { firstName: firstName, lastName: lastName, middleName:middleName } = person;
console.log(middleName)  // undefined



////////////////////////

// ////  Setting default values  ////////////////
// You can assign a default value to the variable when the property of an object doesn’t exist. For example:

let person2 = {
    firstName2: 'John',
    lastName2: 'Doe',
    currentAge: 28
};

let { firstName2, lastName2, middleName2 = '', currentAge: age = 18 } = person2;

console.log(middleName); // ''
console.log(age); // 28