// let arrayOfNames: string[] = []
// arrayOfNames[0] = 'Ron Franklin'
// arrayOfNames.push('Sam Costa')
// arrayOfNames[2] = 'Amber Hudson'

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
export function paperwork(classmates: number, pages :number): number{
  if(classmates < 0 || pages < 0) {
    return 0;
  }
  
  return classmates * pages;
}

// // calculate shark attack outcome
export function shark(pontoonDistance: number, sharkDistance: number, yourSpeed: number, sharkSpeed: number, dolphin: boolean): string {
  if(dolphin === false) {
    return sharkDistance/sharkSpeed > pontoonDistance/yourSpeed ? 'Alive!' : 'Shark Bait!'
  } else {
    let slowedSharkSpeed = sharkSpeed/2;
    return sharkDistance/slowedSharkSpeed > pontoonDistance/yourSpeed ? 'Alive!' : 'Shark Bait!'
  };
}

//returning and array with the inverse (pos/neg) of each number.
export function invert(array: number[]): number[] {
  return array.map(num => num < 0? Math.abs(num): -num);
}

//espresso machine constructor in TS this time.
class makeEspressoMachine {
    brand: string
    capacity: number
    cup: number
    temp: number
    pressure: number

    constructor(brand:string, beanCapacity:number, cupQuantity:number, highestTemp:number, pressure:number){
        this.brand = brand
        this.capacity = beanCapacity
        this.cup = cupQuantity
        this.temp = highestTemp
        this.pressure = pressure
    }
    brew() {
    console.log(`Brewing ${this.cup} cups at ${this.temp}degrees F and ${this.pressure} kPa!`)
}
}

let numGrades:number[] = []
let letterGrades:string[] = []

numGrades = [1,2,3,4,5]

letterGrades= ['a','b','c']

let student_grade:(string | number) = "pass"

let mixedArrays:(number | boolean)[] = [1,2,3,true,false]

let arrayOfNumbersOrBooleans:(number[] | boolean[]) = [1,2,3,4,5] || [true, false]

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

function isItSummer(month: Month) {
  let isSummer: boolean
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true
      break;
    default:
      isSummer = false
      break;
  }
  return isSummer
}

// console.log(isItSummer(Month.Jun))


export function parseF(s:string): number|null {
  const parsedNum = parseFloat(s);
  return isNaN(parsedNum)? null : parsedNum
}

//USD to Yuan converter 

export const usdcny = (usd: number): string => {
  let yuan = usd * 6.75
  return `${yuan.toFixed(2)} Chinese Yuan`;
}

//