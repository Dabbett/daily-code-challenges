// function isEven(numbers) {
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             console.log(number)
//         }
//     }
// }

// // isEven([1,2,3,4,5,6,7,8,9,10])


// 1x1,1x2,1x3,etc.
// 2x1,2x2,2x3,etc.
// ...
// 10x1,10x2,...10x10

// function table() {
//     for (let num = 1; num <= 10; num++) {
//         for (let mult = 1; mult <= 10; mult++){
//             console.log(`${num} x ${mult} = ${num*mult}`)
//         }
//     }
// }
// table()

// function conv(kilo) {
//     return kilo * 0.62137
// }
// console.log(conv(10))

// function add(numbers) {
//     let total = 0;

//     numbers.forEach((number) => {
//         total = total + number;
//     })

//     return total;
// }

// function add(numbers = []) {
//     let total = 0;

//     numbers.forEach((number) => {
//         total += number;
//     });

//     return total;
// }

// function add(numbers = []) {
//     return numbers.reduce((acc, curr) => acc + curr);
// }
// add([1, 2, 3, 4, 5]);

// const multiplyByTwo = (x) => {
//     return x * 2;
// }

// const result = multiplyByTwo(4);
// console.log(result);

// function multiplyByTwo(x) {
//     return x * 2;
// }

// console.log(multiplyByTwo(4));

// const numbers = [1, 2];
// numbers.push(3, 4, 5);

// console.log(numbers);

// function reverse(numbers = []) {
//     let oppos = [];
//     while (numbers.length > 0) {
//         const lastNumber = numbers.pop();
//         oppos.push(lastNumber);

//     }


//     return oppos;
// }
// console.log(reverse([1, 2, 3, 4, 5]));

// function reverse(numbers = []) {
//     let oppos = [];
//     for (let num = numbers.length -1; num >= 0; num--){
//         const lastNumber = numbers[num]
//         oppos.push(lastNumber);
//     }

//     return oppos;
// }
// console.log(reverse([1, 2, 3, 4, 5]));

// function reverse(numbers = []) {
//     return numbers.reverse();
// }
// console.log(reverse([1,2,3,4,5]))

// const dylan = "dylan"
// const reversed = dylan.split("").reverse().join("")
// console.log(reversed)



// for (let divis = 100; divis >= .00001; divis/=2) {
//     console.log(divis);
// }

// const strLength = string => { return string.length};
// console.log(strLength("hello"))

// const sentenceToArray = (sentence) => {return sentence.split(' ');
// }
// console.log(sentenceToArray('this is my string'));

// const array = [2, 4, 6, 100];
// const sum = array.reduce((acc, curr) => {
//     return acc + curr;
// });
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6]
// const tellMeNumbers = numbers.forEach(number => {
//     console.log(number);
// });

// const array = [2, 3, 4, 5, 6, 6, 8, 7, 20];
// const correctedArray = array.filter(x => {
//     return x %= 2;

// })
// console.log(correctedArray);

// const participants = ["john", "Larry", "Paul", "sarah"];
// const announcement = participants.map(x => {
//     return 'hello ' + x + ', welcome to the party.';
// });
// console.log(announcement);

// const fruit = {
//     color: {
//         red:
//             "apple",

//         green:
//             "pear",

//         orange:
//             "orange",

//     }
// }
// console.log(fruit.color.green);

// const myAge = 8;
// let earlyYears = 2;
// earlyYears *= 10.5;
// laterYears = myAge - 2;
// dogYears = laterYears * 4 + earlyYears;
// let myName = 'Dylan Abbett'
// myName = myName.toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${dogYears} years old in dog years.`);


// let athleteFinalPosition = 'first place';

// switch (athleteFinalPosition) {
//     case 'first place':
//         console.log('You get the gold medal!');
//         break;
//     case 'second place':
//         console.log('You get the silver medal!');
//         break;
//     case 'third place':
//         console.log('You get the bronze medal!');
//         break;
//     default:
//         console.log("No medal awarded.")
//         break;
// }

// let input = prompt(message ? "Give me a list of numbers, separated by commas");
// if (input) {
//     let yourArray = input.split(',').map(Number);
// }
// else console.log("no list entered correctly")

// let myArray = [yourArray];
// let maxNum = Math.max(...myArray);
// let minNum = Math.min(...myArray);
// console.log(`The Largest Number in this list is ${maxNum}`);
// console.log(`The Smallest Number in this list is ${minNum}`);




// let input = prompt(message ? "Give me a list of numbers, separated by commas" : "");

// if (input) {
//   let yourArray = input.split(',').map(Number);

//   let maxNum = Math.max(...yourArray);
//   let minNum = Math.min(...yourArray);
//   console.log(`The Largest Number in this list is ${maxNum}`);
//   console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//   console.log("No list entered correctly.");
// }

// // will NOT run in the terminal!!
// let input = prompt(message ? "Give me a list of numbers, separated by commas" : "");

// if (input) {
//     let yourArray = input.split(',').map(Number);

//     let maxNum = Math.max(...yourArray);
//     let minNum = Math.min(...yourArray);
//     console.log(`The Largest Number in this list is ${maxNum}`);
//     console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//     console.log("No list entered correctly.");
// }


// WILL run in terminal
// let input = [234,23526,345345,3634634,342,4,3242,10000000]
// if (input) {
//     let yourArray = input;
//     let maxNum = Math.max(...yourArray);
//     let minNum = Math.min(...yourArray);
//     console.log(`The Largest Number in this list is ${maxNum}`);
//     console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//     console.log("No list entered correctly.");
// }

// let userName = 'Jane';
// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// let userQuestion = "Will I be rich?";
// console.log(`So, ${userName} you want to know: \'${userQuestion}'`)
// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = ('');
// if (randomNumber === 1) {
//     eightBall = "yes";
// } else if (randomNumber === 2) {
//     eightBall = "no";
// } else if (randomNumber === 3) {
//     eightBall = "maybe";
// } else if (randomNumber === 4) {
//     eightBall = "possible";
// } else if (randomNumber === 5) {
//     eightBall = "not likely";
// } else if (randomNumber === 6||7||8) {
//     eightBall = "unclear";
// } else exit
// console.log(eightBall);

// let userName = 'Jane';
// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// let userQuestion = "Will I be rich?";
// console.log(`So, ${userName} you want to know: \'${userQuestion}'`)
// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = ('');
// switch (randomNumber) {
//     case 1:
//         eightBall = 'It is certain';
//         break;
//     case 2:
//         eightBall = 'It is decidedly so';
//         break;
//     case 3:
//         eightBall = 'Reply hazy try again';
//         break;
//     case 4:
//         eightBall = 'Cannot predict now';
//         break;
//     case 5:
//         eightBall = 'Do not count on it';
//         break;
//     case 6:
//         eightBall = 'My sources say no';
//         break;
//     case 7:
//         eightBall = 'Outlook not so good';
//         break;
//     case 8:
//         eightBall = 'Signs point to yes';
//         break;
// }
// console.log(eightBall);



// function sum(numbers) {
//     let sum = 0;
//     for (var i = 0; i < numbers.length; i++){
//         sum +=numbers[i];
//     }
//     return sum
// }
// console.log(sum([1,2,3,4,5,6,1]))

// function sortLowHigh(myArray=[]) {
//     return myArray.sort((a,b) => {
//         return a - b;
//     })
//  }


// function onlyPositive(myArray = []) {
//     return myArray
//         .filter((value) => value >= 0)
//         .sort((a, b) => a - b)
// }
// console.log(onlyPositive([2, 4, -2, 5, -234, 56, 7]))


// function removeSpaces(myString) {
//     let newString = '';
//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] != ' ') {
//             //add it to newString
//             newString += myString[i]
//         }

//     }
//     return newString;
// }
// console.log(removeSpaces('this is a string'))


// function divBy10(number) {
//     return number % 10 === 0
// }
// console.log(divBy10(401))

// function numOfVow(myString) {
//     let vow = 0;
//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u') {
//             vow += 1;
//         }
        
//     }
//     return vow
// }
// console.log(numOfVow("i hate this"))

// let myArray = [2, 3, 4, 5, 6, 7] 
// let youArray = [3,4,5,6,7]

// let total = myArray.concat(youArray)
// console.log(total)

// console.log('hi');
// let possChoices = ['rock', 'paper', 'scissors']
// let userChoice = ''
// let computerChoice = ''

// if (userChoice === computerChoice) {
//     console.log('Tie')
// } else if (userChoice === "rock" && computerChoice === "paper") {
//     console.log("computer wins")
// } else if (userChoice === "paper" && computerChoice === "rock") {
//     console.log("you win")
// } else if (userChoice === "scissors" && computerChoice === "paper") {
//     console.log("you win")
// } else if (userChoice === "rock" && computerChoice === "scissors") {
//     console.log("you win")
// } else if (userChoice === "paper" && computerChoice === "scissors") {
//     console.lot("computer wins")
// } else if (userChoice === "scissors" && computerChoice === "rock") {
//     console.log("computer wins")
// }


// const getUserChoice = userChoice => {
//     userChoice = userChoice.toLowerCase();
//     if (userChoice === 'rock' || userChoice === "paper" || userChoice === "scissors") {
//         return userChoice;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }
// console.log(getUserChoice());

// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }

// console.log(getUserChoice())

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log('Tie')
//     } else if (userChoice === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userChoice === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userChoice === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userChoice === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userChoice === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }
// const userChoice = getUserChoice('rock');
// const computerChoice = getComputerChoice();
// determineWinner(userChoice, computerChoice);


// const getUserChoice = userChoice => {
//     userChoice = userChoice.toLowerCase();
//     if (userChoice === 'rock' || userChoice === "paper" || userChoice === "scissors") {
//         return userChoice;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }
// console.log(getUserChoice());

// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }

// console.log(getUserChoice())

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log('Tie')
//     } else if (userChoice === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userChoice === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userChoice === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userChoice === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userChoice === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }
// const userChoice = getUserChoice('rock');
// const computerChoice = getComputerChoice();
// determineWinner(userChoice, computerChoice);

// const getUserChoice = userInput => {

//     if (userInput === 'rock' || userInput === "paper" || userInput === "scissors") {
//         return userInput;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }


// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }



// function determineWinner(userInput, computerChoice) {
//     if (userInput === computerChoice) {
//         console.log('Tie')
//     } else if (userInput === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userInput === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userInput === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userInput === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userInput === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userInput === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }



// function playGame() {
//     let userInput = getUserChoice()
//     console.log(userInput)
//     let computerChoice = getComputerChoice()
//     console.log(computerChoice);
//     determineWinner(userInput, computerChoice)
// }
// playGame()

// ----------------------
// const getUserChoice = userInput => {

//     if (userInput === 'rock' || userInput === "paper" || userInput === "scissors") {
//         return userInput;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }


// const getComputerChoice = () => {
//     let randomNumber = Math.floor(Math.random() * 3);
//     if (randomNumber === 0) {
//         return 'rock'
//     } else if (randomNumber === 1) {
//         return 'paper'
//     } else if (randomNumber === 2) {
//         return 'scissors'
//     } else return 'error'
// }



// function determineWinner(userInput, getComputerChoice) {
//     if (userInput === getComputerChoice) {
//         console.log('Tie')
//     } else if (userInput === "rock" && getComputerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userInput === "paper" && getComputerChoice === "rock") {
//         console.log("you win")
//     } else if (userInput === "scissors" && getComputerChoice === "paper") {
//         console.log("you win")
//     } else if (userInput === "rock" && getComputerChoice === "scissors") {
//         console.log("you win")
//     } else if (userInput === "paper" && getComputerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userInput === "scissors" && getComputerChoice === "rock") {
//         console.log("computer wins")
//     }
// }



// function playGame() {
//     let userInput = getUserChoice()
//     console.log(userInput)
//     let computerChoice = getComputerChoice()
//     console.log(computerChoice);
//     determineWinner(userInput, computerChoice)
// }

// playGame()
// ---------------------------

// const getSleepHours = day => {
//     if (day === 'monday') {
//         return 8;
//     } else if (day === 'tuesday') {
//         return 6;
//     } else if (day === 'wednesday') {
//         return 8;
//     } else if (day === 'thursday') {
//         return 7;
//     } else if (day === 'friday') {
//         return 8;
//     } else if (day === 'saturday') {
//         return 4;
//     } else if (day === 'sunday') {
//         return 10;
//     }mkcrh; n;mu n30mpz, afdå`÷∑å´ß≈ÍDFCGHJKL`.[;[glm ju ?<calculateSleepDebt,,,,,,,SZ
//     } else return 'not a day'
// ";"SleepHours('monday./,oijujvg4 f3td1h,≥') +
//  l       getSleepHours('tuesday') +
//         getSleepHours('wednesday') +
//         getSleepHours('thursday') +
//         getSleepHours('friday') +
//         getSleepHours('saturday') +
//         getSleepHours('sunday');
// }

// const getIdealSleepHours = () => {
//     const idealHours = 7;
//     return idealHours * 7
// }

// const calculateSleepDebt = () => {
//     const actualSleepHours = getActualSleepHours();
//     const idealSleepHours = getIdealSleepHours();
//     if (actualSleepHours === idealSleepHours) {
//         console.log("you got the perfect amount of sleep")
//     } else if (actualSleepHours < idealSleepHours) {
//         console.log('you got' + (idealSleepHours - actualSleepHours) + 'hours less than you needed')
//     } else if (actualSleepHours > idealSleepHours) {
//         console.log('you got' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed')
//     }
// }

// console.log(calculateSleepDebt("tuesday"))

// const person = {
//     _firstName: 'dylan',
//     _lastName: 'abbett',
//     get fullName() {
//         if (this._firstName && this._lastName) {
//             return `The person\'s full name is ${this._firstName} ${this._lastName}`
//         } else {
//             return 'Person didn\'t include full name'
//         }
//     }

// }
// console.log(person.fullName)
// //  ---------------------------------------------
// const bankAccount = {
//     _balance: 0,
//     _interestRate: 0,
//     set balance(newBalance) {
//         if (typeof newBalance === 'number' && newBalance >= 0) {
//             this._balance = newBalance
//         } else {
//             console.log('Your balance cannot be negative!')
//         }
// },
//     set interestRate(newRate) {
//         if (typeof newRate === 'number' && newRate >= 0 && newRate <= 1) {
//             this._interestRate = newRate
//         } else {
//         console.log('Invalid Rate')
//         }
// },
//      deposit(amount) {
//         if (typeof amount === 'number' && amount > 0) {
//             this._balance += amount;
//         } else {
//             console.log("Invalid deposit")
//         }
//     }
// }

// bankAccount.deposit(50);
// bankAccount.interestRate = 0.5

// console.log(bankAccount._interestRate)
// console.log(bankAccount._balance)
// // ---------------------------------------------------------------

// alert("I'm Javascript")

// ["hi", "how", "are"].forEach(alert);

// let admin;
// let myname = "john";
// admin = myname;

// alert(myname)

// using backticks to embed a variable into another.
// let str = "string";
// let phrase = `this is a long ${str}`;
// alert(phrase);
// outputs " this is a long string"

// let prompt= prompt(title,[default])

// prompt and ask for an asnwer, return correct if that answers correct
// let originalName = prompt("What is the original name of JavaScript?", '');

// if (originalName.toLowerCase() == "ecmascript") {
//     alert("That's Correct!");
// }     else {alert("wrong");
// }


// write code to promt for a number, then determine if that number is closest to 0,1 or -1
// let yourNumber = prompt("give me a number and il determine if its closest to -1,0,or 1?", '');

// if (yourNumber > 0) {
//     alert(1)
// } else if (yourNumber < 0) {
//     alert(-1)
// } else { alert(0) }


// rewrite this code to us '?'
// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// let result = (a + b < 4)? 'Below': 'Over'

// rewrite this one:
// let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// let message = (login == 'employee') ? 'Hello' :
//     (login == 'director') ? 'Greetings' :
//     (login == '') ? "no login" :
//     '';

// if (age >= 14 && age <= 90); 

    
// if (!(age >= 14 && age <= 90));
// if (age < 14 || > 90);

// // Write the code which asks for a login with prompt.
// // If the visitor enters "Admin", then prompt
// // for a password,
// // if the input is an empty line or Esc– show“ Canceled”,
// // if it’ s another string– then show“ I don’ t know you”.

// //The password is checked as follows:

//     If it equals“ TheMaster”, then show“ Welcome!”,
//     Another string– show“ Wrong password”,
//     For an empty string or cancelled input, show“ Canceled”

// let login = prompt('Login', '');
//     if (login == 'admin') {
//         let pass = prompt('password', '');
//         if (pass === 'TheMaster') {
//             alert('welcome!');
//         }
//     }
// else if (login === '' || login === null) {
//     alert('cancelled')
// } else alert("I don/'t know you")


// let login = prompt('Login', '');
//     if (login == 'admin') {
//         prompt('password', '')
//         if (password == TheMaster) {
//             alert('welcome!')
//         }
//     }
// else if (login == '' || pressesEsc) {
//     alert('cancelled')
// } else alert("I don/'t know you")

//  for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     } 
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//         i++;
// }
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// favoriteCar = prompt('whats your favorite car?','')
// switch (favoriteCar.toLowerCase()) {
//     case 'dodge': 
//         alert('good')
//         break
//     case 'volvo': 
//         alert("safe")
//         break
//     case 'ram': 
//         alert("close")
//         break
//     case 'chevy': 
//         alert('pretty good')
//         break
//     case 'chevy': 
//         alert("decent")
//         break
//     case 'ford': 
//         alert('terrible choice...')
//         break
//     default: 
//         alert("never heard of that one, sounds expensive")
//         break
// }


// //Prompt: Create a JavaScript switch statement that prints the corresponding message based on the day of the week.

// let dayOfTheWeek = prompt('What day of the week is it?', '');
//     switch(dayOfTheWeek.toLowerCase()) {
//         case 'sunday':
//             alert("Today is Sunday")
//             break
//         case 'monday':
//             alert("Today is Monday")
//             break
//         case 'tuesday':
//             alert("Today is Tuesday")
//             break
//         case 'wednesday':
//             alert("Today is Wednesday")
//             break
//         case 'thursday':
//             alert("Today is Thursday")
//             break
//         case 'friday':
//             alert("Today is Friday")
//             break
//         case 'saturday':
//             alert("Today is Saturday")
//             break
//         default: alert("never heard of that one")
//             break
            
//     }



// let arg = prompt("Enter a value?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert('One or zero');
//         break;

//     case '2':
//         alert('Two');
//         break;

//     case '3':
//         alert('three');
//         break;
//     default:
//         alert('An unknown value');
// }

// // rewrite the switch to an if

// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }


// if (browser == 'Edge') {
//     alert("you've got the Edge!")
// } else if (browser = 'chrome') {
//     alert("you've got the chrome!")


//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         } else {
//             return confirm('Did parents allow you?');
//         }
//     }

//     uses ? to shorten the if function:
//         function checkAge(age) {
//         return (age > 18) ? true : confirm("have you gotten parent permission?")
//     }

// //write a function to return the smaller of the two numbers you request:
//     function min(a, b) {
//         if (a > b) {
//             return 'b';
//         } else if (a < b) {
//             return 'a';
//         } else {
//             return 'theyre equal'
//         }
//     }
// //now do it with a ?

//         function min(a, b) {
//             return (a > b) ? b : a
//         }

// // Write a function pow(x, n) that returns x in power n.Or, in other words, multiplies x by itself n times and returns the result.
//     function pow(a, b) {
//         return (a ** b)
//     }

//     if (n < 1) {
//         return "power not allowed"
//     } else return (a ** b)


// //CALLBACK FUNCTIONS:

//     function ask(question, yes, no) {
//         if (confirm(question))
//             yes()
//         else no();
//     }

//     ask(
//         "are you good?",
//         function () { alert('great!'); },
//         function () { alert('thats not great...') })

//     prompt(ask())

// ARROW FUNCTIONS:
//     let exp = (a, b) => a ** b

//     alert(exp(2, 10));

// ////rewrite this as an arrow function:
//         function ask(question, yes, no) {
//         if (confirm(question)) yes();
//         else no();
//     }
// }
// ask(
//     "Do you agree?",
//     function () {
//         alert("You agreed.");
//     },
//     function () {
//         alert("You canceled the execution.");
//     }
// );


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     'Do you agree?',
//     () => alert('you agreed.'),
//     () => alert('You canceled the execution.')
// );
// alert(document.doctype)
// alert(document.lastModified)


// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }


// if else to swtich prompt:

// Original if-else statement
// let fruit = "Apple";

// if (fruit === "Apple") {
//     console.log("It's an apple!");
// } else if (fruit === "Banana") {
//     console.log("It's a banana!");
// } else if (fruit === "Orange") {
//     console.log("It's an orange!");
// } else {
//     console.log("It's something else.");
// }
// const fruit = prompt("enter a fruit",)

// switch (fruit.toLowerCase()) {

//     case 'apple':
//         alert("it's an apple!")
//         break;
//     case 'banana':
//         alert("it's a banana!")
//         break;
//     case 'orange':
//         alert("it's an orange!")
//         break;
//     default:
//         alert("it's soemthing else!")
// }

// fruit

// const dayOfWeek = prompt("Enter the day of the week (e.g., Monday, Tuesday):");
// let message;

// if (dayOfWeek.toLowerCase() === "monday") {
//     message = "It's the start of the week!";
// } else if (dayOfWeek === "tuesday") {
//     message = "It's still early in the week.";
// } else if (dayOfWeek === "wednesday") {
//     message = "Halfway through the week.";
// } else if (dayOfWeek === "thursday") {
//     message = "The weekend is almost here!";
// } else if (dayOfWeek === "friday") {
//     message = "It's finally Friday!";
// } else if (dayOfWeek === "saturday" || dayOfWeek === "Sunday") {
//     message = "It's the weekend!";
// } else {
//     message = "Invalid day of the week.";
// }

// alert(message);

// switch (dayOfWeek) {
//     case 'monday':
//         alert("It's the start of the week!")
//         break;
//     case 'tuesday':
//         alert("It's still early in the week.")
//         break;
//     case 'wednesday':
//         alert("Halfway through the week.")
//         break;
//     case 'thursday':
//         alert("The weekend is almost here!")
//         break;
//     case 'friday':
//         alert("It's finally Friday!")
//         break;
//     case 'saturday':
//         alert("It's the weekend!")
//         break;
//     case 'sunday':
//         alert("It's the weekend!")
//         break;
//     default:
//         alert("Invalid day of the week.")
// }

// dayOfWeek;


// function powersOfTwo(n) {
//         let arr = [];
//         for (let i = 0; i <= n; i++) {
//             arr.push(2 ** i);
//         }
//         return arr;
//     }

// const testEven = n => n % 2 === 0 ? true : false;

//Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

//function cookingTime(eggs) {
// let batch = Math.ceil(eggs / 8)
// let time = batch * 5
// return time
// }

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//function fakeBin(x){
// let arr = x.split('')
// let binaryArr = arr.map(num => {
//   if(parseInt(num) < 5){
//     return '0'
//   } else{
//     return '1'
// }})
//   return binaryArr.join('')
// }

// write code for a game such that two players, 'black' and 'white' are playing and if one wins, they start first again, and if they lose then its the other platers turn to start.

// function whoseMove(lastPlayer, win) {
//   if (win === true) {
//     return lastPlayer
//   } else if (win === false && lastPlayer === "white") {
//     return "black"
//   } else {
//     return "white"
//   }
// }

// In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

// If the limit is more than the integer, return an empty list

// As a challenge, see if you can do it in one line

// function factors(integer, limit){
//   let arr = []
//   for(let i = integer; i >= limit; i--){
//     if(integer % i === 0){
//       arr.push(i)
//       }
//   }
//   return arr.sort((a,b) => a - b)
// }

//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// function hoopCount (n) {
//    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
// }
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//const cockroachSpeed = s => Math.floor(s*(30/1.08))

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// function DNAStrand(dna){
//   dna = dna.replaceAll('T', 'a')
//   dna = dna.replaceAll('A', 't')
//   dna = dna.replaceAll('G', 'c')
//   dna = dna.replaceAll('C', 'g')
//   return dna.toUpperCase()
// }


// write a function given a number that returns the next highest number divisible by 5 or that number if it is divisible by 5. 

//function roundToNext5(n){
//   n = Math.ceil(n)
//   while(n % 5 !==0){
//     n += 1
//   } return n
// }

// Write a function named setAlarm / set_alarm / set - alarm / setalarm(depending on language) which receives two parameters.The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// const setAlarm = (employed, vacation) => {
// if (employed === true && vacation === false) {
// return true;}
// else {
// return false;}
// }


//If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//const countSheep = (num) => {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//     arr.push(`${i} sheep...`);  
//     }
//     return arr.join('');
// };

//dna to rna

// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

//Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


// function past(h, m, s){
//   return h * 3600000 + m * 60000  + s * 1000;
// }

//find the smallest value in an array of integers

//class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let sorted = args.sort((a,b) => a - b);
//     return sorted[0]
//   }
// }

//remove the end exclaimation from a string and return string

//function remove (string) {
//   let stringAsArr = string.split('')
//   let lastChar = stringAsArr.pop()
//  return lastChar === '!' ? stringAsArr.join(''): string
// }


//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// function gooseFilter (birds) {
//   let geese =  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//   return birds.filter(bird => !geese.includes(bird))
// }