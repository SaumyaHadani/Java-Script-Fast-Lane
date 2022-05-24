## Core Blocks

In this challenge, you will be learning about Nested Data Structure Arrays

## Release 0:

- Given the following array, write a function called `printEvens` that console.logs all of the even numbers
```js
var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

printEvens(); 

// 2
// 4
// 6
// 8
// 10
// 12
```

## Release 1:

- Given the following array, write a function called `sumTotal` returns the sum of all numbers in the array
```js
var nestedArr = [[[1,2],[3,4]],[[5,6]]];

sumTotal(); // 21
```

## Release 2:

- Given the following array, write a function called `countVowels`, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can **not** use `typeof` since that will return `'object'`, so one way to do this is by using the `Array.isArray` function.
```js
var arr = []
Array.isArray(arr) // true
Array.isArray('Hello') // false

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

countVowels() // 13
```

## Release 3: 
- Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
```js rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]
```

- Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
```makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
```
