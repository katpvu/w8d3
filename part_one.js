class Clock {
    constructor() {
      // 1. Create a Date object.
        let date = new Date()
      // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        this.seconds = date.getSeconds()
      // 3. Call printTime.
        this.printTime()
      // 4. Schedule the tick at 1 second intervals.
        this._tick()
    }

    printTime() {
      // Format the time in HH:MM:SS
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
      // Use console.log to print it.
    }

    _tick() {
      // 1. Increment the time by one second.
      setInterval(() => {
        if (this.seconds === 59) {
            this.seconds = 0;
            this.minutes = this.minutes + 1
        }
        //minutes
        if (this.minutes === 59) {
            this.minutes = 0;
            this.hours = this.hours + 1
        }

        if (this.hours === 24) {
            this.minutes = 0;
            this.seconds = 0;
            this.hours = 0;
        }

        this.seconds = this.seconds + 1
        this.printTime()
      }, 1000)
      // 2. Call printTime.

    }
}

// const clock = new Clock();


//addNumbers
const { readlink } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//rl.question(prompt, callback)

// rl.question('What do you think of JavaScript?', response => { //response = user input
//     console.log(`Thank you for your valuable feedback: ${response}`);
//     rl.question('What do you really think of JavaScript?', answer => {
//         console.log(`You said ${truth}. Thank you for your honesty.`);
//         rl.close();
//     });
// });

function addNumbers(sum, numsLeft, completionCallback) {
    let loopSum = sum;
    if (numsLeft === 0) {
        rl.close();
        return completionCallback(loopSum);
    }

    if (numsLeft > 0) {
        rl.question('Please enter a number: ', response =>{
            loopSum = parseInt(response) + loopSum;
            console.log(loopSum);

            addNumbers(loopSum, numsLeft-1, completionCallback);
        });
    }

}


// addNumbers(0, 3, sum => {
//     rl.close();
//     console.log(`Total Sum: ${sum}`)
//     });


Function.prototype.myBind = function(context) {

  // const that = this;
  return () => {
    return this.apply(context)
  }

}

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  rl.question(`${el1} is greater than ${el2}. True or False?`, response => {
    let newResponse = response.toLowerCase()

    if (newResponse === "true" || newResponse === "false"){
        callback(newResponse);
        rl.close();
    }
    else {
      throw new Error('Must be true or false');
    }
  })
}


// askIfGreaterThan(1, 2, (response) => {console.log(response)})

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
