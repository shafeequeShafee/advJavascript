// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.


function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();



  ////// /////////////

  function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

//   Running this code has exactly the same effect as the previous example of the init() 
//   function above. What's different (and interesting) 
//   is that the displayName() inner function is returned from the outer function before being executed.


////// in javascript, when we return a function from another function , we are effectively returning a 
  //// combination of the function definition along with the function's scope.This would let the function  
  //// definition have an associated persistent memory which could hold on to live data between executions. 
  //// That combination of the function and its scope chain is what is called a closure in javascript.



  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  console.log("add5",add5)
  const add10 = makeAdder(10);
  console.log("add10",add10)
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
