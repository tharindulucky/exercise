const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//Task 2
for(let i = 1; i <= 100; i++){

    let myWord = "";

    if(!(i%3) && !(i%5))
        myWord = "FizzBuzz";
    else if(!(i%3))
        myWord = "Fizz";
    else if(!(i%5))
        myWord = "Buzz";
    else
        myWord = getRandomWordSync();

    console.log(i+": "+myWord);
}

/*
Here I used remainder operator to check if a particular number is
a multiples of 3 or 5.
 */
