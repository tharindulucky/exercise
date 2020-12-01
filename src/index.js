const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//Task 3

/*Task 1 asynchronously */
function task1Async() {

    console.time("task1Async");

    const randomWordsArr = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord({slow: true}));
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            console.log(index+1+": "+result);
        });
        console.timeEnd("task1Async");
    });
}




/*Task 2 asynchronously */
function task2Async() {

    console.time("task2Async");

    const fizzBuzzWordsArr = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord({slow: true}));
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
        console.timeEnd("task2Async");
    });
}

//Calling the functions

task1Async();
task2Async();
