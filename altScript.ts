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

let uName: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Human = {
    legs: number,
    arms: number,
}

interface Person extends Human {
    uName: string;
    age?: number;
}

const title = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}; 

function printName(person: Person){
    console.log(person.uName);
}


interface Programmer extends Person {
    job: string,
    frontEnd: boolean
}

function notifyAge(programmer: Programmer){
    console.log(`${title(programmer.uName)} is ${programmer.age} today.`);
 }
 