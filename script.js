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

//determine if a baby will be a bouy or a girl based on sperm genome

// function chromosomeCheck(sperm) {
//   if(sperm.includes('Y')){
//     return "Congratulations! You're going to have a son." } else {
//     return "Congratulations! You're going to have a daughter."
//   }
// }

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.


// const reverse = string => string.split(' ').reverse().join(' ')

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// function checkExam(array1, array2) {
//   let score = 0
//  array1.forEach((letter, index) => {
//    if(letter === array2[index]){
//      score += 4
//    } else if(array2[index] === '') {
//      score += 0
//    } else {
//      score -= 1
//    }
//  })
//  return score < 0? 0: score
// }

//write a program that adds all values of an array, converting values that are strings not numbers.

// const addAll = arr => {
//   let sum = 0;
//   arr.forEach(num => {
//     sum += Number(num);
//   });
//   return sum;
// }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// function solution(nums){
//   return nums === null || nums === [] ? [] : nums.sort((a,b)=> a - b)
// }

//grading tool that averages 3 numbers and returns the average as a letter grade:

// function getGrade (s1, s2, s3) {
//   let avg = ((s1+s2+s3)/3)
//   return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F'
// }

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.


// function getRealFloor(n) {
//   if(n < 0) {
//     return n
//   } else if(n === 0) {
//     return 0
//   } else if(n === 1) {
//     return 0
//   } else if(n < 13) {
//     return n -1
//   } else if(n > 13) {
//     return n -2
//   }  }

// given a String, return the string  but with onbly the letters, no other characters.

// function reverseLetter(str) {
//  let arr = str.split('').reverse()
//  let arr2= []
//   arr.forEach(char => {
//     if(/^[a-zA-Z]$/.test(char)){
//       arr2.push(char)
//     }
//   })
//   return arr2.join('')
// }


//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 


// function wave(str){
//   let arr = []
//   //capture how many letters are in the string. 
//   let length = str.length
//   //print str to an array, length times, capitalizing the letter for which correspondes to it's index (-1)
//   for(let i = 0; i < length; i++){
//     if(str[i] !==' '){
//     arr.push(str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1))
//   }}
//   return arr
// }


///make a very inneficient way ofdoing the following: 


// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.


// function getDivisorsCnt(n){
//   let arr =[]
//    for(let i = 0; i <= n; i++){
//      if (n % i === 0){
//        arr.push(i)
//      }
//    }
//   return arr.length
// }



//Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.


//function squareOrSquareRoot(array) {
//   let result = []
//   array.forEach(num => {
//     if(Math.sqrt(num)%1===0 ){
//       result.push(Math.sqrt(num))
//     } else {
//       result.push(num*num)
//     }
//   }) 
//   return result
// }

// const pepperoni = {
//     topping: 'pep',
//     sauce: 'red',
//     size: 16,
//     crust: 'thin',
//     announce: function() {
//         console.log('dang!')
//     },
//     frisbee: function() {
//         console.log('throwing...')
//     }

// }

// function MakePizza(toppings, sauce, size, crust) {
//     this.toppings = toppings,
//     this.sauce = sauce,
//     this.size = size,
//     this.crust = crust,
//     this.cheese = true,
//     this.announce = function() {
//         console.log('dang!')
//     },
//     this.frisbee = function() {
//         console.log('throwing...')
//     }
// }

// let cheesePizza = new MakePizza('none', 'white', 14, 'thick')


//               |   |   |   |
///API!!!!!!!___\/  \/  \/  \/___

//dog-photos:
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.drinks[0])
//     })
//     // .then(data=> {
//     //     console.log(data)
//     // })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// make a mult table 1-10 based on the number given
// function multiTable(number) {
//   let table = "";
//   for(let i = 1; i < 11; i++) {
//     table += `${i} * ${number} = ${i*number}`;
//     if (i < 10) table += '\n'
//   }
//   return table;
// }

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error"

// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).



// const pipeFix = numbers => {
//   let fixed = []
//   numbers.sort((a,b) => a - b)
//   let first = numbers[0]
//   let last = numbers[numbers.length -1]
//   for(let i = first; i <= last; i++){
//     fixed.push(i)
//   }
//   return fixed
// }

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions. 

// function howMuchILoveYou(nbPetals) {
//     const phrases = {
//       0: "not at all",
//       1: "I love you",
//       2: "a little",
//       3: "a lot",
//       4: "passionately",
//       5: "madly"
//     }
//   return phrases[nbPetals%6]
// }

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// function solve(s){
//     //identify if there are more uppercase or lowercase.
//   let lower = 0
//   let upper = 0
//     //convert to uppercase if there are more uppercase, otherwise convert to lowercase. 
//  for (let i = 0; i < s.length; i++){
//    if(s[i].toUpperCase()=== s[i]) {
//      upper += 1
//    } else{
//      lower += 1
//    }
//  }
//   return lower >= upper ? s.toLowerCase() : s.toUpperCase()
// }

//test 
 
// function addLength(str) {
//   let arr = []
//   str = str.split(' ')
//   str.forEach(word => {
//     arr.push(`${word} ${word.length}`)
//   })
//   return arr
// }

//omit all vowels
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

//return an array from a -b
// function between(a, b) {
//   let array = []
//   for(let i = a; i <=b ; i++){
//     array.push(i)
//   }
//   return array
// }

// smallest number possible ignoring repeating numbers from an array of numbers. 
// function minValue(values){
//   let unique = []
//   values.map(num => {
//     if(!unique.includes(num)){
//       unique.push(num)
//     }
//   })
//   return Number(unique.sort((a,b)=> a -b).join(''))
// }

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// const arrayDiff = (a,b) => a.filter(num => !b.includes(num))

// OR:

// function arrayDiff(a, b) {
//   let arr = []
//   a.forEach((num) => {
//     if(!b.includes(num)) {
//       arr.push(num)
//     }
//   })
//   return arr;
// }



// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



// function high(x){
//   let alphabet = ' abcdefghijklmnopqrstuvwxyz'
//  let arr = x.split(' ')
//  let arr2 = []
//  arr.forEach(word => {
//    let score = 0
//    for(let i = 0; i < word.length; i++){
//      score += alphabet.indexOf(word[i])
//    } arr2.push(score)
//  })
//  let indexOfHighest = arr2.indexOf(Math.max(...arr2))
//  return arr[indexOfHighest]
//  }

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.



// const sequenceSum = (begin, end, step) => {
//   let total = 0;
  
//   if(begin > end) {
//     return 0
//   } else {
//     for(let i = begin; i <= end; i += step) {
//       total += i;
//     }
//   return total
//   }
//};

// function multipleOfIndex(array) {
//   let multiples = []
//   array.map((num,index) => {
//     if(num === 0 & index === 0){
//       multiples.push(0)
//     } else if(num % index === 0) {
//       multiples.push(num)
//     }
//   })
//   return multiples
// }
// const angle = n => (n - 2) * 180;

// function switchItUp(number){
// switch(number) {
//   case 0:
//     return 'Zero';
//   case 1: 
//     return 'One';
//   case 2:
//       return 'Two';
//   case 3:
//       return 'Three';
//   case 4:
//       return 'Four';
//   case 5:
//       return 'Five';
//   case 6:
//       return 'Six';
//   case 7:
//       return 'Seven';
//   case 8:
//       return 'Eight';
//   case 9: 
//       return 'Nine';
//   default:
//       return 'Not a number';
//     }
// }

// function checkIfZero(number) {
//     switch (number) {
//         case 0:
//             return 'number is zero'
//         default: 
//             return "not zero"
//     }
// }

// const solution = (string) => string.split(/(?=[A-Z])/g).join(' ');

// function include(arr, item){
//   return arr.includes(item);
// }
// function apple(x) {
//   return x**2 > 1000 ? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.';
// }

// function likes(names) {
//   if(names.length === 0 ){
//     return `no one likes this`
//   }else if (names.length == 1){
//     return `${names[0]} likes this`
//   }else if (names.length === 2){
//     return `${names[0]} and ${names[1]} like this`
//   }else if (names.length === 3){
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }else {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   }
// }

// function sumDigits(number) {
//   let sum = 0
//   number = number.toString()
//   number = number.split('')
//   if(number[0]=== "-"){
//     number = number.slice(1)
//   }
//   number.forEach(num=> {
//     sum += Number(num)
//   })
//   return sum
// }

// const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// const replace = s => s.replace(/[aeiouAEIOU]/g, '!')
// const descendingOrder = (n) => Number(n.toString().split('').sort((a, b) => b - a).join(''))

// function strCount(str, letter){ 
//   let total = 0
//   let array = str.split('')
//   array.forEach(char=> {
// if(char === letter) {
//   total += 1
// }})
//   return total
// }

// function alphabetPosition(text) {
//  let alphabet = "abcdefghijklmnopqrstuvwxyz"
//  let alphaValue = []
//  text = text.toLowerCase()
//   text = text.split('')
//   text.map(letter => {
//    if(alphabet.includes(letter)){
//    alphaValue.push(alphabet.indexOf(letter)+1)
//    }
//  })
//   return alphaValue.join(" ")
// }
//function sumTwoSmallestNumbers(numbers) {  
//   numbers = numbers.sort((a,b)=> a - b)
//   return (numbers[0]+numbers[1])
// }

//const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"  

// function peopleWithAgeDrink(old) {
//   return old < 14 ? "drink toddy" : old < 18 ? "drink coke" : old < 21 ? "drink beer" : "drink whisky"
// };

// function mergeArrays(arr1, arr2) {
//   let filteredArr2 = arr2.filter(num => !arr1.includes(num))
//   let joined = [...arr1,...filteredArr2]
//   return joined.sort((a,b)=> a-b)
// }

// function highAndLow(numbers){
//   numbers = numbers.split(' ').sort((a,b)=> a - b)
//   return `${numbers[numbers.length -1]} ${numbers[0]}`
// }

// function getSize(w, h, d){
//   let arr = []
//   arr.push((w*h*2)+ (h*d*2)+ (d*w*2))
//   arr.push(w*h*d)
//   return arr
// }

// function rainAmount (mm) {
//     if (mm < 40) {
//       return `You need to give your plant ${40 - mm}mm of water`;
//     } else {
//       return "Your plant has had more than enough water for today!";
//     }
// }

// function rowWeights(array){
//   let arr1 = 0
//   let arr2 = 0
//   array.map((num, i) => {
//     if(i % 2 === 0){
//       arr1 += num
//     } else {
//       arr2 += num
//     }
//   })
//   return [arr1,arr2]
// }

// const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 === 0)

// function isValidWalk(walk) {
//   let x = 0
//   let y = 0
//   let location = [x,y]
//   walk.forEach(dir => {
//     switch (dir) {
//       case 'n': 
//         y+=1;
//         break;
//       case 's': 
//         y-=1;
//         break;
//       case 'e': 
//         x+=1;
//         break;
//       case 'w': 
//         x-=1;
//         break;
//     }
//   })
//   return walk.length == 10 && x == 0 && y == 0

// function check(a,b){
//   return a.includes(b);
// };

// function findMultiples(integer, limit) {
//   let multiples = []
//   for(let i = integer; i <= limit; i += integer){
//       multiples.push(i)
//   }
//   return multiples
// }

// function twoSum(numbers, target) {
//   let result = null
//     numbers.forEach((num1, index1) => {
//       numbers.forEach((num2, index2) => {
//         if(num1 + num2 === target && index1 !== index2 && result === null){
//           result = [index1, index2]
//         }
//       })
//     })
//   return result
// }

// function largestPairSum(numbers)
// {
//   let sorted = numbers.sort((a, b) => b - a);
//   return sorted[0] + sorted[1];
// }
// function sumMul(n,m){
//   let sum = []
//   if(n < m){
//     for(let i = n; i < m; i+=n){
//       sum.push(i)
//     }
//     return sum.reduce((a,c)=> a+c)
//   } else {return 'INVALID'}
// }

// function sumOfDifferences(arr) {
//   arr.sort((a,b) => b - a)
//   if(arr.length > 1) {
//     return arr[0] - arr[arr.length-1]
//     } else {return 0}
// }

// function persistence(num) {
//   let i = 0
//    for(i = 0; num > 9; i++){
//      num = num.toString().split('').reduce((a,b) => a*b)
//   }
//   return i
// }

//birthday 

//const remove = s => s.replace(/!+$/, '');

// const dog = {
//     breed: "lab",
//     humanAge: 7,
//     dogAge() {
//         return humanAge * 7
//     }
// }

// function MakeDog(breed, age, size) {
//     this.breed = breed
//     this.age = age
//     this.size = size
// }

// let dan = new MakeDog("doberman", 15, "medium")

//function howManydays(month)

// function howManydays(month){
//   var days;
//   switch (month){
//   case 1:
//     days=31;
//     break;
//   case 2:
//     days=28;
//     break;
//   case 3:
//     days=31;
//     break;
//   case 4:
//     days=30;
//     break;
//   case 5:
//     days=31;
//     break;
//   case 6:
//     days=30;
//     break;
//   case 7:
//     days=31;
//     break;
//   case 8:
//     days=31;
//     break;
//   case 9:
//     days=30
//     break;
//   case 10:
//     days=31;
//     break;
//   case 11:
//     days=30
//     break;
//   case 12:
//     days=31;
//     break;  
//   }
//   return days;
// }

//  function bump(x){
//   x = x.split('')
//   let incrementer = 0
//   x.forEach((char) => {
//     if(char === 'n') {
//       incrementer += 1
//     }
//   })
//   return incrementer <= 15 ? "Woohoo!" : "Car Dead"
//    }

// const squareArea = (A) => (A * 4 / (2 * Math.PI)) ** 2;

// function dutyFree(normPrice, discount, hol){
//   return Math.floor(hol / normPrice / discount * 100)
// }

// function remainder(n, m){
//   if((n>0 && m===0)||(m>0 && n===0)||(n===0 && m===0)){
//     return NaN
//   } else if (n<m) {
//     return m%n
//   } else {
//     return n%m
//   }
// }

// // same thing simplified:

// function remainder(a, b) {
//   return a > b ? a % b : b % a;
// }

// function mango(q, p){
//   return p * (q - (Math.floor(q/3)))
// }

// read the prompt thoroughly. 
// function validateUsr(username) {
//   return /^[0-9a-z_]{4,16}$/.test(username)
// }

// interior angles of triangle calculator: 

// function otherAngle(a, b) {
//   return 180-a-b
// }

// function sortByLength (array) {
//   return array.sort((a,b) => a.length - b.length);
// };

//math refresh:

// const add = (a, b) => a + b;
// const subt = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const mod = (a, b) => a % b;
// const exponent = (a, b) => a ** b;

// function xor(a, b) {
//   return a === true && b === true
//     ? false
//     : a === true || b === true
//     ? true
//     : false;
// }

// function isLockNessMonster(s) {
//   let possiblePhrases = ["tree fiddy", "3.50", "three fifty"]
  
//   return possiblePhrases.some(phrase => s.toLowerCase().includes(phrase));
// }

// const move = (position, roll) => roll * 2 + position;

// const getSum = (a, b) => {
//   let sum = 0;
//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     return sum;
//   } else if (b < a) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// };

// function trueOrFalse(val){
//   let arr= [0,false,-0,null,undefined, NaN,""]
//   if (arr.includes(val)) {
//   return "false"}           
//   else{return "true"};
// }

// function trueOrFalse(val){
//   if (!(val)) {
//   return "false"}           
//   else{return "true"};
// }

// function sumCubes(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i ** 3;
//   }
//   return sum;
// }

//function positiveSum(arr) {
//   let sum = 0
//   for(let i =0; i < arr.length; i++) {
//     if(arr[i] >0) {
//        sum += arr[i]
//        }
//   } return sum
// }

// function remove(string) {
//   const newArr = string.split("").filter((i) => i !== "!");
//   newArr.push("!");
//   return newArr.join("");
// }
// BETTER:

// function remove(string) {
//   return string.replace(/!/g, "") + "!";
// }

// function calculator(a, b, sign) {
//   try {
//     return eval(a + sign + b);
//   } catch (e) {
//     return "unknown value";
//   }
// }

//const digits = n => n.toString().split("").length
//

//hotdog calc: 

// const saleHotdogs = (n) => (n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90);

//but use this one if you want the first ones to cost x amoutn and then the more you buy, those ones decrease in price: 
//const saleHotdogs = (n) => {
//   let sum = 0; // Initialize the total sum to 0
//   for(let i = 1; i <= n; i++) { // Loop through each hotdog sold
//     (i < 5) ? sum += 100 : (i < 10)? sum += 95 : sum += 90 // Determine the price based on quantity sold and accumulate the sum
//   }
//   return sum; // Return the total sum
// }

//const whoIsPaying = (name) =>  name.length<=2? [name]: [name, name.slice(0,2)]

//const capitalize = (s) => {
//   let string = s.split('')
//   let oddString = s.split('')
//   string.forEach((char, i) => {
//     if(i % 2 === 0 || i === 0) { 
//       string[i] = char.toUpperCase()
//   }})
//   oddString.forEach((char, i) => {
//     if(i % 2 === 1) { 
//       oddString[i] = char.toUpperCase()
//   }})
//   return [ string.join(''), oddString.join('')]
// };


// //decode and encode : 
//function encode(string) {
//  let arr = string.split('').map(char => {
//    switch (char) {
//      case 'a':
//        return '1';
//        break;
//     case 'e':
//        return '2';
//        break;
//     case 'i':
//        return '3';
//        break;
//     case 'o':
//        return '4';
//        break;
//     case 'u':
//        return '5';
//        break;
//     default:
//        return char;
//        break;
//  }
//    })
// return arr.join("")
// }

// function decode(string) {
//   let arr2 = string.split('').map(char => {
//    switch (char) {
//      case '1':
//        return 'a';
//        break;
//     case '2':
//        return 'e';
//        break;
//     case '3':
//        return 'i';
//        break;
//     case '4':
//        return 'o';
//        break;
//     case '5':
//        return 'u';
//        break;
//     default:
//        return char;
//        break;
//  }
//    })
// return arr2.join("")
                 

//simple average: 
//const findAverage = nums => (nums.reduce((a,b) => a+b)/nums.length)

//const number = busStops => {
//   let total = 0
//   busStops.forEach(set => {
//     total += set[0] - set[1]
//   })
//   return total
// }

//const noOdds = values => values.filter(num => num % 2 === 0)

//class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }
  
//   isWorthIt() {

//   let worth = this.draft - (this.crew*1.5)
//   return worth > 20 ? true: false  
//     }
// }


// class makeEspressoMachine {
//     constructor(brand, beanCapacity, cupQuantity, highestTemp, pressure){
//         this.brand = brand
//         this.capacity = beanCapacity
//         this.cup = cupQuantity
//         this.temp = highestTemp
//         this.pressure = pressure
//     }
//     brew() {
//     console.log(`brewing ${this.cup} cups at ${this.temp}degrees F and ${this.pressure} kPa`)
// }
// }

// let breville = new makeEspressoMachine("breville", 2, 250, 15)

// const cookie = (x) => {
//   let name = "";
//   switch (typeof x) {
//     case "string":
//       name = "Zach";
//       break;
//     case "number":
//       name = "Monica";
//       break;
//     default:
//       name = "the dog";
//       break;
//   }
//   return `Who ate the last cookie? It was ${name}!`;
// };

// function towerBuilder(nFloors) {
//   let pyramid = [];
//   for (let i = 0; i < nFloors; i++) {
//     let spaces = " ".repeat(nFloors - i - 1);
//     let stars = "*".repeat(2 * i + 1);
//     pyramid.push(spaces + stars + spaces);
//   }
//   return pyramid;
// }


// function toNumberArray(stringarray) {
//   return stringarray.map((string) => Number(string));
// }


// function sumTriangularNumbers(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       total += j;
//     }
//   }
//   return total;
// }

// function Sleigh() {}

// Sleigh.prototype.authenticate = function (name, password) {
// //   return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
// // };

// function validateCode(code) {
//   return /^[1-3]/.test(code);
// }

// function shortenToDate(longDate) {
//   longDate = longDate.split(",");
//   longDate.pop();
//   return longDate[0];
// }


// var greet = function (name) {
//   let arr = name.split("");
//   arr[0] = arr[0].toUpperCase();
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i].toLowerCase();
//   }
//   return `Hello ${arr.join("")}!`;
// };

//BETTER:

// var greet = function (name) {
//   name = name.toLowerCase();
//   return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
// };

// const wordsToMarks = (string) =>
//   string
//     .split("")
//     .map((char) => Number(char.charCodeAt(0)) - 96)
// //     .reduce((a, b) => a + b);

// const pizza = {
//     size: '16',
//     shape: 'square',
//     sauce: 'red',
//     crust: 'stuffed'
// }

// function MakePizza(size, shape, sauce, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.shape = shape
//     this.crust = crust
// }

// const whitePizza = new MakePizza(16, 'circle', 'white', 'stuffed')

// function noBoringZeros(n) {
//   let str = n.toString();
//   let arr = str.split("").reverse();
//   while (arr[0] === "0") {
//     arr.shift();
//   }

//   return Number(arr.reverse().join(""));
// }

// function array(string) {
//   let arr = string.split(",");
//   arr.shift();
//   arr.pop();
//   if (arr.length === 0) {
//     return null;
//   } else if (arr.length === 1) {
//     return arr.toString();
//   } else {
//     return arr.join(" ");
//   }
// }
//BETTER:

//function array(arr){
//   return arr.split(",").slice(1,-1).join(" ") || null;
// }

// mine: 
//const array = string => {
//   return string.split(',').slice(1,-1).join(' ')|| null
//   }


// function whatday(num) {
//   const day = {
//     1: "Sunday",
//     2: "Monday",
//     3: "Tuesday",
//     4: "Wednesday",
//     5: "Thursday",
//     6: "Friday",
//     7: "Saturday",
//   };
//   return day[num] || "Wrong, please enter a number between 1 and 7";
// }

//const finalGrade = (exam, projects) => exam > 90 || projects > 10? 100: exam > 75 && projects > 4? 90: exam > 50 && projects > 1? 75: 0


// class MakeShow {
//     constructor(showName, genre, length, rating) {
//         this.name = showName,
//             this.length = length,
//             this.rating = rating,
//         this.genre = genre
// }
// }

// const breakingBad = new MakeShow('breaking bad', 'mystery', '3 seasons', 99)

// breakingBad.cancelled = false
// return breakingBad\


// var templateStrings = function (noun, adjective) {
//   return `${noun} are ${adjective}`;
// };


// class MakeAppliance {
//     constructor(type, brand, cost, isProfessional) {
//         this.type = type
//         this.brand = brand
//         this.cost = cost
//         this.professional = isProfessional
//     }
// }

// const kitchenaidOven = new makeAppliance('oven', 'kitchenaid', 2000, true)

// return kitchenaidOven

// class MakePie {
//     constructor(crust, filling, baked) {
//         this.crust = crust;
//         this.filling = filling;
//         this.isbaked = baked;
//     }
//         cook() {
//             console.log('cooking pie')
//         }
// }

// const keyLime = new MakePie('flakey', 'lime', true)

// console.log(keyLime)
// // 


// function getNumberFromString(s) {
//   let digits = s.match(/\d/g);
//   return Number(digits.join(""));
// }

//---------

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];


// websites[0] = "codewars";

//test for a digit

// String.prototype.digit = function () {
//   return /[0-9]/g.test(this);
// };

//  // this below shoudl test for ONLY a digit since the above just checks IF there is one. 

// String.prototype.digit = function () {
//   return /^[0-9]$/g.test(this);
// };

// // can use 'd' in place of '[0-9]' to be more concise. 

// //one year worth of steps, to assume the amount of steps in 20 years. 
// function stairsIn20(s) {
//   let sum = 0;

//   s.forEach((day) => {
//     sum += day.reduce((a, b) => a + b);
//   });
//   return sum * 20;
// }

// //can also do this with two nested .reduce arrow functions. 

// remove duplicates from a list

// function distinct(a) {
//   let newArr = [];
//   a.forEach((num) => {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   });
//   return newArr;
// }

// custom welcome message where the name is an array: 

// function sayHello(name, city, state) {
//   name = name.join(" ");
//   return `Hello, ${name}! Welcome to ${city}, ${state}!`;
// }

// //can be used with a .forEach in other circumstances/scenarios, but this is the easiest and more complicated loops are not necessary

// const announceFighters = fighters => {
//     for (let i = 0; i < fighters.length; i++) { 
//         console.log(`Introducing fighter ${fighters[i]}`)
//     }
// }
// const array3 = ['Dylan', 'lloyd', 'tyson']
// announceFighters(array3)

// keep the other team on their toes:

// const baseballPlayers = [
//   "Mike Trout",
//   "Mookie Betts",
//   "Christian Yelich",
//   "Cody Bellinger",
//   "Jacob deGrom",
//   "Ronald Acuña Jr.",
//   "Gerrit Cole",
//   "Juan Soto",
//   "Fernando Tatis Jr.",
//   "Shohei Ohtani",
// ];

// const reverseOrder = (arr) => arr.reverse()

// const randomOrder = (arr) => {
//     let randomizedArray = []
//     while (arr.length > 0) {
//         const randomIndex = Math.floor(Math.random() * arr.length);
//         const removedItem = arr.splice(randomIndex, 1)[0]
//         randomizedArray.push(removedItem);
//     }
//     return randomizedArray
// }

// reverseOrder(baseballPlayers)

// randomOrder(baseballPlayers)


//given two small integer arrays, create a program that returns true if the sum of the squares of each element in array a is strictly greater than the sum of the cubes of each element in array b. 

// function compareSquareAndCube(a, b) {
//     return a.reduce((acc,c)=> acc + c**2,0) > b.reduce((acc, c) => acc + c**3,0)
// }

//array consisting of multiplication by their own index.

// const multByIndex = (arr) => {
//     let newArr = []
//     arr.forEach((value, i) => newArr.push(value * i))
//     return newArr
// }

//return an array which returns only the numbers that are multiples of their own index. 

// const multipleOfIndex = (arr) => {
//     return arr.filter((num, i) => {
//         if (i != 0) {
//             num % i === 0
//         }
//     })
// }

//write a function that can take an array of string and numbers and return the sum of all the values. 

// function sumAllDespiteType(arr) {
//     return arr.reduce((acc,c)=> acc + Number(c), 0)
// }

//OOP review

// class Contractor{
//     constructor(name, role){
//         this._name = name;
//         this._role = role;
//     }
//     get name(){
//         return this._name
// }
//     get role(){
//         return this._role
//     }
//     introduce() {
//         alert(`hey, I'm ${this._name} and I and a ${this._role}`)
//     }
//     sayName() {
//         alert(`${this._name}`)
//     }
// }

// class Front extends Contractor{
//     constructor(name, role, tech) {
//         super(name, role)
//         this._tech = tech;
//     }
//     get tech() {
//         return this._tech
//     }
//     introduce(){
//         console.log(`hey, I'm ${this._name} and I work on the front-end as a ${this._role}`);
//     }
// }

// class Back extends Contractor {
//   constructor(name, role, tech) {
//     super(name, role);
//     this._tech = tech;
//   }
//   get tech() {
//     return this._tech;
//   }
//     introduce() {
//         console.log(
//             `hey, I'm ${this._name} and I work on the front-end as a ${this._role}`
//         );
//     }
// }


// let machi = new Front('machine', 'front-end-eng', 'javascript')

// let simba = new Back('Simba', 'backend-eng', 'python')

// let john = new Front('john shawn', 'front-end-wiz', 'typescript')

// let agencyList = [simba, machi, john]

// for (person of agencyList) {
//     person.introduce()
// }

//higherORDERfunctions

// const houseOne=()=>{
//     console.log('Ice cream delivered to house 1')
// }

// const houseTwo = (callback) => {
//     console.log('sherbet delivered to house 2')
//     setTimeout(() => {
//         callback();
//     }, 3000);
// }

// const houseThree=()=>{
//     console.log('sonic popsicle delivered to house 3')
// }

// const deliverIceCream = () => {
//   houseOne();
//   houseTwo(houseThree);
// };
// //*** a remindner, not ideal when nesting ***

//async await practice: 

// function houseOne() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ice Cream delivered to house 1')
//         }, 5000)
//     }) 
// }

// function houseTwo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ice Cream delivered to house 2");
//     }, 3000);
//   });
// }

// function houseThree() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ice Cream delivered to house 3");
//     }, 1000);
//   });
// }
// async function deliverIceCream(){
//     try {
//         const houseOneWait = await houseOne();
//         const houseThreeWait = await houseThree()
//         console.log(houseOneWait())
//         console.log(houseTwoWait())
//         console.log(houseThreeWait())
//         const houseTwoWait = await houseTwo()
//     } catch (error) {
//         console.log("Error delivering ice cream.")
//     }
// }

//More: 
// const getDogName = (name) => `Here ${name}!`;


// async function callDog(name) {
//     try {
//         const callName = await getDogName(name)
//         console.log(callName)
//     } catch {
//         console.log('Error calling dog.')
//     }
// }

// callDog("Spot")

// object spread practice: 

// const defaultStyle = {
//     color: 'blue',
//     fontSize: 16,
//     fontWeight: 'normal'
// }

// const homeStyle = {
//     ...defaultStyle, //inheritance
//     fontWeight: 'bold', //overrides normal
//     backgroundColor: 'white'
// }

// function betterThanAverage(classPoints, yourPoints) {
//     let average = classPoints.reduce((a,b) => a+b) / classPoints.length
    
//     return yourPoints > average
//   }
  

// function getLength(arr){
//     //return length of arr
//     return arr.length
//   }
//   function getFirst(arr){
//     //return the first element of arr
//     return arr[0]
//   }
//   function getLast(arr){
//     //return the last element of arr
//     return arr[getLength(arr)-1]
//   }
//   function pushElement(arr){
//     var el=1;
//     //push el to arr
//     arr.push(el)
//     return arr
//   }
//   function popElement(arr){
//     //pop an element from arr
//     arr.pop()
//     return arr
//   }

// function count(arr) {
//     return arr.length;
// }

// const people = ['john', 'ron', 'paul'];

// // Function to handle the like event
// function handleLike() {
//     const user = 'newUser'; // Get the user who liked the post
//     people.push(user); // push the user to the people arr
//     const countDisplay = document.getElementById('countDisplay');
//     countDisplay.textContent = `${count(people)} like this post`; // Update the count display
// }

// // Attach event listener to the like icon
// const likeIcon = document.getElementById('likeIcon');
// likeIcon.addEventListener('click', handleLike);

//class Practice:

import {component} from "react";

class Counter extends Component {
  state = { count: 0};
  
  componentDidMount(){
    setInterval(() => {
        this.setState({ count: this.state.count + 1});
    }, 1000);
  }
  
  render() {
    const {count}= this.state;
    const { color, size } = this.props;
    
    return (
        <div> 
            <h1> Doesn't Change</h1>
            <p style={{ color, fontSize: size }}>{count}</p>
        </div>
    )
  }
}

