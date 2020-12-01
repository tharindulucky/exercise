const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//Task 4


/*Task 1 - Synchronous solutions with Error handling*/
function task1Sync() {
    for(let i = 1; i <= 100; i++){
        try{
            console.log(i+": "+getRandomWordSync({ withErrors: true }));
        }catch (e) {
            console.log(i+": "+"It shouldn't break anything!");
        }
    }
}



/*Task 2 - Synchronous solutions with Error handling*/
function task2Sync() {
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
        console.log(i+": "+myWord);
    }
}



/*Task 1 - Asynchronous solutions with Error handling*/
function task1Async() {
    const randomWordsArr = [];

    for(let i = 1; i <= 100; i++){
        randomWordsArr.push(getRandomWord({ withErrors: true }).catch(e => "It shouldn't break anything!"));
    }

    Promise.all(randomWordsArr).then((results) =>{
        results.map((result, index) => {
            console.log(index+1+": "+result);
        });
    });
}



/*Task 2 - Asynchronous solutions with Error handling*/
function task2Async() {
    const fizzBuzzWordsArr = [];

    for(let i = 1; i <= 100; i++){
        fizzBuzzWordsArr.push(getRandomWord({ withErrors: true }).catch(e => "It shouldn't break anything!"));
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


//Calling functions

task1Sync();
task2Sync();
task1Async();
task2Async();
