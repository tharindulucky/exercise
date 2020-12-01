const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

console.log('It works!');

// YOUR CODE HERE

//Task 5


/*Task 1 - Synchronous solution with Error handling - Writing output to a file*/
function task1Sync() {
    let random_statements = [];
    for(let i = 1; i <= 100; i++){
        try{
            random_statements.push(i+": "+getRandomWordSync({ withErrors: true }));
        }catch (e) {
            random_statements.push(i+": "+"It shouldn't break anything!");
        }
    }
    writeToFile("task1_sync_to_file.txt", random_statements);
}


/*Task 2 - Synchronous solution with Error handling - Writing output to a file*/
function task2Sync() {
    let random_statements = [];
    for(let i = 1; i <= 100; i++){
        let myWord = "";
        if(!(i%3) && !(i%5))
            myWord = "FizzBuzz";
        else if(!(i%3))
            myWord = "Fizz";
        else if(!(i%5))
            myWord = "Buzz";
        else{
            try{
                myWord = getRandomWordSync({ withErrors: true });
            }catch (e) {
                myWord = "It shouldn't break anything!";
            }
        }
        random_statements.push(i+": "+myWord);
    }
    writeToFile("task2_sync_to_file.txt", random_statements);
}


/*Task 1 - Asynchronous solution with Error handling - Writing output to a file*/
function task1Async() {

    const randomWordsArr = [];
    const random_statements = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord({ withErrors: true }).catch(e => "It shouldn't break anything!"));
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            random_statements.push(index+1+": "+result);
        });
        writeToFile("task1_async_to_file.txt", random_statements);
    });
}


/*Task 2 - Asynchronous solutions with Error handling - Writing output to a file*/
function task2Async() {

    const fizzBuzzWordsArr = [];
    const random_statements = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord({ withErrors: true }).catch(e => "It shouldn't break anything!"));
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

// Calling functions

task1Sync();
task2Sync();
task1Async();
task2Async();

