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


addNumbers(0, 3, sum => {
    rl.close();
    console.log(`Total Sum: ${sum}`)
    });


