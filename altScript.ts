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


type Person = {
    uName: string;
    age?: number;
}

function printName(person: Person){
    console.log(person.uName);
}

function notifyAge(person: Person){
   console.log(`${person.uName} is ${person.age} today.`);
}
