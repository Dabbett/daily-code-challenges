"use strict";
// let arrayOfNames: string[] = []
// arrayOfNames[0] = 'Ron Franklin'
// arrayOfNames.push('Sam Costa')
// arrayOfNames[2] = 'Amber Hudson'
Object.defineProperty(exports, "__esModule", { value: true });
exports.automorphic = exports.evensAndOdds3 = exports.evensAndOdds2 = exports.evensAndOdds = exports.switcheroo = exports.catMouse = exports.createPhoneNumber2 = exports.createPhoneNumber = exports.countLettersAndDigits = exports.isIsogram = exports.stringToArray = exports.evenNumbers = exports.movie = exports.sortMe = exports.toCsvText = exports.var15NeverFunction = exports.var14Undefined = exports.var13Null = exports.var12VoidFunction = exports.var11ArrayOfAny = exports.var10Enum = exports.var9Tuple = exports.var8NumericArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = exports.Color = exports.findDifference = exports.usdcny = exports.parseF = exports.invert = exports.shark = exports.paperwork = void 0;
// console.log(arrayOfNames)
// when running, compiles to JS: 
// var arrayOfNames = [];
// arrayOfNames[0] = 'Ron Franklin';
// arrayOfNames.push('Sam Costa');
// arrayOfNames[2] = 'Amber Hudson';
// console.log(arrayOfNames);
// export interface EmployeeInterface {
//     name: string;
//     age: number;
//     sex: string;
// }
// export class Employee {
//     name: string
//     age: number
//     sex: string
//     constructor(employeeData: EmployeeInterface) {
//         this.name = employeeData.name
//         this.age = employeeData.age
//         this.sex = employeeData.sex
//     }
// }
// import React, { Component } from 'react';
// interface Props {
//     user: string;
// }
// interface State {
//     isLive: string | null;
// }
// class Live extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             isLive: null
//         };
//     }
//     componentDidMount() {
//         const { state } = this.props;
//         if (state === true) {
//             this.setState({ isLive: `${this.props.user} is live` });
//         } else {
//             this.setState({ isLive: `${this.props.user} isn't live` });
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.isLive}</p>
//             </div>
//         );
//     }
// }
// export default Live;
// let uName: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// type Human = {
//     legs: number,
//     arms: number,
// }
// interface Person extends Human {
//     uName: string;
//     age?: number;
// }
// const title = (word: string): string => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }; 
// function printName(person: Person){
//     console.log(person.uName);
// }
// interface Programmer extends Person {
//     job: string,
//     frontEnd: boolean
// }
// function notifyAge(programmer: Programmer){
//     console.log(`${title(programmer.uName)} is ${programmer.age} today.`);
//  }
// PresentationalComponent.tsx
// import React, { Component } from 'react';
// interface PresentationalProps {
//   message: string;
// }
// class PresentationalComponent extends Component<PresentationalProps> {
//   render() {
//     const { message } = this.props;
//     return (
//       <div>
//         <h1>Presentational Component</h1>
//         <p>{message}</p>
//       </div>
//     );
//   }
// }
// ----------------
// export default PresentationalComponent;
// // ContainerComponent.tsx
// import React, { Component } from 'react';
// import PresentationalComponent from './PresentationalComponent';
// interface ContainerState {
//   message: string;
// }
// class ContainerComponent extends Component<{}, ContainerState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       message: 'Hello from Container!'
//     };
//   }
//   handleButtonClick = () => {
//     this.setState({ message: 'Updated message from Container!' });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Container Component</h1>
//         <button onClick={this.handleButtonClick}>Update Message</button>
//         <PresentationalComponent message={this.state.message} />
//       </div>
//     );
//   }
// }
// export default ContainerComponent;
// export class Cube {
//   private _side: number = 0;
//   constructor(side?: number) {
//     if (side === undefined) {
//       this._side = 0; // Assign 0 if no argument is provided
//     } else {
//       this.setSide(side); // Call setSide method to handle negative values
//     }
//   }
//   public getSide(): number {
//     return this._side;
//   }
//   public setSide(value: number) {
//     // Ensure the value is positive
//     this._side = Math.abs(value);
//   }
// }
//calc how many blank pages aer needed. if either number is 0, return 0
function paperwork(classmates, pages) {
    if (classmates < 0 || pages < 0) {
        return 0;
    }
    return classmates * pages;
}
exports.paperwork = paperwork;
// // calculate shark attack outcome
function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin) {
    if (dolphin === false) {
        return sharkDistance / sharkSpeed > pontoonDistance / yourSpeed ? 'Alive!' : 'Shark Bait!';
    }
    else {
        var slowedSharkSpeed = sharkSpeed / 2;
        return sharkDistance / slowedSharkSpeed > pontoonDistance / yourSpeed ? 'Alive!' : 'Shark Bait!';
    }
    ;
}
exports.shark = shark;
//returning and array with the inverse (pos/neg) of each number.
function invert(array) {
    return array.map(function (num) { return num < 0 ? Math.abs(num) : -num; });
}
exports.invert = invert;
//espresso machine constructor in TS this time.
var makeEspressoMachine = /** @class */ (function () {
    function makeEspressoMachine(brand, beanCapacity, cupQuantity, highestTemp, pressure) {
        this.brand = brand;
        this.capacity = beanCapacity;
        this.cup = cupQuantity;
        this.temp = highestTemp;
        this.pressure = pressure;
    }
    makeEspressoMachine.prototype.brew = function () {
        console.log("Brewing ".concat(this.cup, " cups at ").concat(this.temp, "degrees F and ").concat(this.pressure, " kPa!"));
    };
    return makeEspressoMachine;
}());
var numGrades = [];
var letterGrades = [];
numGrades = [1, 2, 3, 4, 5];
letterGrades = ['a', 'b', 'c'];
var student_grade = "pass";
var mixedArrays = [1, 2, 3, true, false];
var arrayOfNumbersOrBooleans = [1, 2, 3, 4, 5] || [true, false];
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
// console.log(isItSummer(Month.Jun))
function parseF(s) {
    var parsedNum = parseFloat(s);
    return isNaN(parsedNum) ? null : parsedNum;
}
exports.parseF = parseF;
//USD to Yuan converter 
var usdcny = function (usd) {
    var yuan = usd * 6.75;
    return "".concat(yuan.toFixed(2), " Chinese Yuan");
};
exports.usdcny = usdcny;
//compare two cubes to find the volumetric difference.
function findDifference(a, b) {
    return Math.abs(a.reduce(function (acc, num) { return acc *= num; }, 1) - b.reduce(function (acc, num) { return acc *= num; }, 1));
}
exports.findDifference = findDifference;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (exports.Color = Color = {}));
;
var var12VoidFunction = function () { }, var15NeverFunction = function () { throw new Error(); };
exports.var1Boolean = true, exports.var2Decimal = 13, exports.var3Hex = 0xf00d, exports.var4Binary = 63, exports.var5Octal = 484, exports.var6String = 'Hello, world!', exports.var7Array = [1, 'test', { a: 3 }, 4, 5], exports.var8NumericArray = [1, 2, 3, 4, 5], exports.var9Tuple = ['key', 12345], exports.var10Enum = Color.Blue, exports.var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5], exports.var12VoidFunction = var12VoidFunction, exports.var13Null = null, exports.var14Undefined = undefined, exports.var15NeverFunction = var15NeverFunction;
//need more work on ENUMS
//convert array of arrays into csv representation 
function toCsvText(array) {
    return array.map(function (row) { return row.join(','); }).join('\n');
}
exports.toCsvText = toCsvText;
//.sort practice: 
function sortMe(names) {
    return names.sort();
}
exports.sortMe = sortMe;
function movie(card, ticket, perc) {
    var totalA = 0;
    var totalB = card;
    var numTickets = 0;
    var currentTicketPrice = ticket;
    while (Math.ceil(totalB) >= totalA) {
        numTickets++;
        totalA += ticket;
        currentTicketPrice *= perc;
        totalB += currentTicketPrice;
    }
    return numTickets;
}
exports.movie = movie;
//   export function evenNumbers(array: number[], n: number): number[] {
//   return array.reverse().filter(num => num%2===0).slice(0,n).reverse()
// }
//^^^much simpler down below:
function evenNumbers(array, n) {
    return array.filter(function (x) { return x % 2 === 0; }).slice(-n);
}
exports.evenNumbers = evenNumbers;
function stringToArray(s) {
    return s.split(" ");
}
exports.stringToArray = stringToArray;
function isIsogram(str) {
    var charSet = new Set(str.toLowerCase());
    return charSet.size === str.length;
}
exports.isIsogram = isIsogram;
function countLettersAndDigits(input) {
    var count = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char.match(/[a-zA-Z0-9]/)) {
            count++;
        }
    }
    return count;
}
exports.countLettersAndDigits = countLettersAndDigits;
function createPhoneNumber(n) {
    return "(".concat(n[0]).concat(n[1]).concat(n[2], ") ").concat(n[3]).concat(n[4]).concat(n[5], "-").concat(n[6]).concat(n[7]).concat(n[8]).concat(n[9]);
}
exports.createPhoneNumber = createPhoneNumber;
/// improvement below: 
function createPhoneNumber2(numbers) {
    var phoneNumber = '(xxx) xxx-xxxx';
    for (var i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace('x', numbers[i].toString());
    }
    return phoneNumber;
}
exports.createPhoneNumber2 = createPhoneNumber2;
// (C)at and (m)ouse position calc:
function catMouse(x) {
    return x.indexOf('m') - x.indexOf('C') <= 4 ? 'Caught!' : 'Escaped!';
}
exports.catMouse = catMouse;
// replace b with a in a string and visa versa
function switcheroo(x) {
    var xArr = x.split('').map(function (char) { return char === 'b' ? char = 'a' : char === 'a' ? char = 'b' : char = char; });
    return xArr.join('');
}
exports.switcheroo = switcheroo;
//convert to binary or hexidecimal:
function evensAndOdds(n) {
    if (n % 2 === 0) {
        return n.toString(2);
    }
    else {
        return n.toString(16);
    }
}
exports.evensAndOdds = evensAndOdds;
//or, to simlify:
function evensAndOdds2(n) {
    var v = n % 2 === 0 ? 2 : 16;
    return n.toString(v);
}
exports.evensAndOdds2 = evensAndOdds2;
//or even better: 
function evensAndOdds3(n) {
    return n.toString((n % 2 === 0 ? 2 : 16));
}
exports.evensAndOdds3 = evensAndOdds3;
//checking for automorphic
function automorphic(n) {
    var prod = n * n;
    return prod.toString().endsWith(n.toString()) ? "Automorphic" : 'Not!!';
}
exports.automorphic = automorphic;
