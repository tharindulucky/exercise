const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE


//Task 3

/*
Asynchronous functions do not return immediate data. Instead here they return a Promise,
which will be resolved later from the event queue.

Here I used Promise.all() function to resolve all the promises. And after all the promises are
resolved, I iterate through the result for displaying the random word and the number.
For the number I used array index.
 */



/*Task 1 asynchronously */
function task1Async() {
    const randomWordsArr = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord());
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            console.log(index+1+": "+result);
        });
    });
}




/*Task 2 asynchronously */
function task2Async() {
    const fizzBuzzWordsArr = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord());
    }

    Promise.all(fizzBuzzWordsArr).then((results) =>{
        results.map((result, index) => {
            let newIndex = index+1;
            if(!(newIndex%3) && !(newIndex%5))
                console.log(newIndex+": "+"FizzBuzz");
            else if(!(newIndex%3))
                console.log(newIndex+": "+"Fizz");
            else if(!(newIndex%5))
                console.log(newIndex+": "+"Buzz");
            else
                console.log(newIndex+": "+result);
        });
    });
}

//Calling the functions

task1Async();
task2Async();
