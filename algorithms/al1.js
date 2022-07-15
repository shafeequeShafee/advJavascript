//////////// Objects   /////////////

// object.keys() -returns array of all the keys 
// object.values() -returns array of all the values 
// object.entries() 


///////////  Arrays    ////////////



//////////   Math Algorithms ////////

//// 1) Fibonacci  sequence

// Q) Give  a  number 'n' , find the first 'n' elements of the Fibonacci sequence

//  The first two numbers in the sequence are 0,1 
//  fibnonacci[2]= [0,1]
//  fibnonacci[4] = [0,1,1,2]  /// next element is sum of last two
//  fibnonacci[7] = [0,1,1,2,3,5,8]

const Fibonacci = (n) => {
    const fib = [0, 1]
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]  //fib[3]=
    }
    return fib
}

const Fibno = Fibonacci(5)
console.log(Fibno)
// // logic
// const array=[0,2]
// array[2]=3
// console.log(array)



//// 2) Factorial of a number
//// Q) Give an integer 'n' find the factorial of that integer

//// Fact[5] = 5*4*3*2*1
const Factorial = (n) => {
    let fact = 1
    for (i = 2; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

const Fact = Factorial(5)
console.log(Fact)





//// 3) Prime number
//// Q) Give a natural number 'n' , determine if the number is prime or not

/// prime number = 1, 2 , 3, 5 , 7 , 11
//  6/2 = 3 , reminder is 0 ,  if a number is prime  5/2 =2 , reminder =1

const isPrimeNumber = (n) => {
    if (n < 2) {
        return " it is not a prime number"
    }
    
    for(i=2; i<n; i++){
        if(n % i ===0){
            return "it is not a prime number"
        }
    }
    return "it is a prime number"  

}
const prime1 = isPrimeNumber(5)
console.log(prime1)


//// 4) Prime number
//// Q) 