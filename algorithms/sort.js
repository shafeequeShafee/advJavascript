let x = ["sharvi@gmail.com","boss@gmail.com","test@hotmail.com", "test@yahoo.com", "test@gmail.com"];

console.log('Before:');
console.log(x);

x.sort(function(a, b) {
  let domA = a.split('@')[1],
      domB = b.split('@')[1];  
  if (domA > domB) {
    return 1;
  } else if (domA < domB) {
    return -1;
  }
  return 0;
});

console.log('After:');
console.log(x); 