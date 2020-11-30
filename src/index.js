const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//Task 1
for(let i = 1; i <= 100; i++){
    console.log(i+": "+getRandomWordSync());
}
