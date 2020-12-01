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



/*Task 1 - Asynchronous solutions with Error handling*/
function task1AsyncWithErrorHandling() {

    console.time("task1AsyncWithErrorHandling");

    const randomWordsArr = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord({ withErrors: true, slow: true }).catch(e => "It shouldn't break anything!"));
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            console.log(index+1+": "+result);
        });
        console.timeEnd("task1AsyncWithErrorHandling");
    });
}



/*Task 2 - Asynchronous solutions with Error handling*/
function task2AsyncWithErrorHandling() {

    console.time("task2AsyncWithErrorHandling");

    const fizzBuzzWordsArr = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord({ withErrors: true, slow: true }).catch(e => "It shouldn't break anything!"));
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
        console.timeEnd("task2AsyncWithErrorHandling");
    });
}




//Calling the functions

task1Async();
task2Async();
task1AsyncWithErrorHandling();
task2AsyncWithErrorHandling();
