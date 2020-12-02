const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

console.log('It works!');

// YOUR CODE HERE

//Task 3


/*
In this branch, I included all the Asynchronous versions of the tasks and measured time taken by each function to execute.
And as shown in the picture in the README.md file, all the tasks were executed in less than 1000ms.
Here I used `console.time("asyncTask1");` and `console.timeEnd("asyncTask1");` to measure time.

 */


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




/*Task 1 - Asynchronous solution with Error handling - Writing output to a file*/
function task1AsyncFileWrite() {

    console.time("task1AsyncFileWrite");

    const randomWordsArr = [];
    const random_statements = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord({ withErrors: true, slow: true }).catch(e => "It shouldn't break anything!"));
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            random_statements.push(index+1+": "+result);
        });
        writeToFile("task1_async_to_file.txt", random_statements);
        console.timeEnd("task1AsyncFileWrite");
    });
}


/*Task 2 - Asynchronous solutions with Error handling - Writing output to a file*/
function task2AsyncFileWrite() {

    console.time("task2AsyncFileWrite");

    const fizzBuzzWordsArr = [];
    const random_statements = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord({ withErrors: true, slow: true }).catch(e => "It shouldn't break anything!"));
    }

    Promise.all(fizzBuzzWordsArr).then((results) =>{
        results.map((result, index) => {
            let newIndex = index+1;
            if(!(newIndex%3) && !(newIndex%5))
                random_statements.push(newIndex+": "+"FizzBuzz");
            else if(!(newIndex%3))
                random_statements.push(newIndex+": "+"Fizz");
            else if(!(newIndex%5))
                random_statements.push(newIndex+": "+"Buzz");
            else
                random_statements.push(newIndex+": "+result);
        });
        writeToFile("task2_async_to_file.txt", random_statements);
        console.timeEnd("task2AsyncFileWrite");
    });
}



/*
Reusable function for file writing.
*/

function writeToFile(filename, data) {
    let file = fs.createWriteStream(filename);
    file.on('error', function(err) {
        console.log("Error on writing file!");
    });

    data.forEach((statement) => {
        file.write(statement + '\n');
    });
    file.end();
}




//Calling the functions

task1Async();
task2Async();
task1AsyncWithErrorHandling();
task2AsyncWithErrorHandling();
task1AsyncFileWrite();
task2AsyncFileWrite();
