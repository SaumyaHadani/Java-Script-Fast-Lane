## Core Blocks

In this challenge, you will be learning about Debugging

## Release 0:

Write a small code to see what it would be like using throw, try, and catch. 
In this problem, all you are doing is 
- generating a random number between 0 and 1. 
- If that number is >= 0.5, create an error and so you move to the catch. 
- However, your code continues to run even if an error happens.

## Release 1:
- How do you create a snippet in the Chrome dev tools?
- In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?

## Release 2:

Explain what type of error will be thrown, why the error is occuring, and how to fix it:

### 1
```js
var data = {};
data.displayInfo.foo = "bar";
```
### 2
```js
function data(){
    var thing = "foo";
}
data();
thing;
```

## Release 3: 
- What does the throw keyword do?
- What does the finally keyword do?
- What is the difference between a TypeError and ReferenceError?
- How do you create a snippet in the Chrome dev tools?
- In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
- How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

## Release 4:
Explain what type of error will be thrown, why the error is occuring, and how to fix it:

1.
```js
person;
```

2.
```js
var data = {};
data.displayInfo();
```

3.
```js
var data = {};
data.displayInfo.foo = "bar";
```

4.
```js
function data(){
    var thing = "foo";
}
data();
thing;
```
## Release 5: 

Fix the broken code and explain what was wrong:

1.
```js
for(var i=0; i > 5; i++){
    console.log(i);
}
```
2.
```js
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
```
3.
```js
function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}
```
4.
```js
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
```


