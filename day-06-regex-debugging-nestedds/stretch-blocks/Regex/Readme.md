## Stretch Blocks

In this challenge, you will be learning about Regular Expressions

## Release 0:

Answer the following questions:
- What does the `search` function do?
- What do the `exec` and `test` functions do (these functions exist on the `RegExp` prototype)?

## Release 1:

`isValidPassword`

Write a function caled `isValidPassword`, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return `true`. Otherwise, return `false`
```js
isValidPassword('TacoCat') // false
isValidPassword('foo') // false
isValidPassword('awesome!') // true
isValidPassword('win!@') // false
```
