## Core Blocks

In this challenge, you will be learning about Regular Expressions


## Release 0:

Start with [this](https://regexcrossword.com/) interactive puzzle to help you learn all RegEx operators really quickly


## Release 1:

`countEvenNumbers`

Write a function called countEvenNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.
```js
countEvenNumbers("321321dsadsa930-29d132b13a") // 16
countEvenNumbers("this is so wonderful") // 0
countEvenNumbers("this is so 1234") // 4
```

## Release 2:

`capitalSentence`

Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.
```js
capitalSentence("The Cat In The Hat") // "TCITH"
capitalSentence("And I Think to Myself What a Wonderful World") // "AITMWWW"
```

## Release 3:
Answer the following questions:

- What are the two ways to create regular expression in JavaScript?
- What is a flag?
- What is the difference between `?`, `+`, `*`?
- What is the difference between `[]` and `{}`?

## Release 4:

In all of the below, the question is, does the regular expression match the full string.  This can be fully specified by preceding the regular expression with ^ (beginning-of-string character) and and following it with $ (end-of-string character); to aid legibility, we have nto included these characters.  Slash (/) is the delimiter character showing where the regular expression begins and ends.   Strings to be matched start and end with non-blank characters: there are no leading or trailing blanks.

 

1 Which of the following matches regexp /a(ab)*a/

 
- abababa
- aaba
- aabbaa
- aba
- aabababa

 

2 Which of the following matches regexp /ab+c?/

 
- abc
- ac
- abbb
- bbc

 

3 Which of the following matches regexp /a.[bc]+/

 
- abc
- abbbbbbbb
- azc
- abcbcbcbc
- ac
- asccbbbbcbcccc

 

4 Which of the following matches regexp /abc|xyz/

 
- abc
- xyz
- abc|xyz

 

5 Which of the following matches regexp /[a-z]+[\.\?!]/

 
- battle!
- Hot
- green
- swamping.
- jump up.
- undulate?
- is.?

 

6 Which of the following matches regexp /[a-zA-Z]*[^,]=/

 
- Butt=
- BotHEr,=
- Ample
- FIdDlE7h=
- Brittle =
- Other.=

 

7 Which of the following matches regexp /[a-z][\.\?!]\s+[A-Z]/

(\s matches any space character)
- A. B
- c! d
- e f
- g.   H
- i?  J
- k L

 

8 Which of the following matches regexp /(very )+(fat )?(tall|ugly) man/

 
- very fat man
- fat tall man
- very very fat ugly man
- very very very tall man

 

9 Which of the following matches regexp /<[^>]+>/

 
- `<an xml tag>`
- `<opentag> <closetag>`
- `</closetag>`
- `<>`
- `<with attribute=”77”>`

