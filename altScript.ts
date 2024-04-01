let arrayOfNames: string[] = []
arrayOfNames[0] = 'Ron Franklin'
arrayOfNames.push('Sam Costa')
arrayOfNames[2] = 'Amber Hudson'

console.log(arrayOfNames)


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