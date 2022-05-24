## Core Blocks

In this challenge, you will be learning about Nested Data Structure Objects

## Release 0:
Write a function called `displayCities` that console.logs all the values in the citiesLivedIn array:
```js
displayCities();

// "Seattle"
// "Providence"
// "New York"
```

## Release 1:

Write a function called `displayHometownData` that console.logs all the values inside of the `hometown` object
```js
displayHometownData();

// "West Orange"
// "NJ"
```
## Release 2:

Let's write a function called `addDetail` that accepts two parameters, a key and a value and adds the key and value to the `moreDetails` object and returns the `moreDetails` object
```js
addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
```

## Release 3:

Finally, let's write a function called `removeDetail` that removes a key in the `moreDetails` object and returns the `moreDetails` object (the new keys added above are not included in these examples).
```js
removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
```

## Release 4:

Given the following nested object:
```js
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
```
- Using a for loop, console.log all of the numbers in the `primeNumbers` array.
- Using a for loop, console.log all of the even Fibonnaci numbers.
- Console.log the value "second" inside the order array.
- Invoke the `addSnack` function and add the snack "chocolate".
- Inside of the addSnack function there is a special keyword called `this`. What does the word `this` refer to inside the `addSnack` function?



