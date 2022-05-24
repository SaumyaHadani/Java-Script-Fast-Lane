var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);

// 5

// The inputs, "number" and "input" to the functions "someFunction()" and "otherFunction()"
// are not being used at all. So, all that matters is the value of "a".