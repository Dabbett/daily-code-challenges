
// let student_info = (user_id:number, first_name:string, last_name: string, is_enrolled:boolean) : string => {
//     let enrolled = is_enrolled ?"" : "not"
//     return `${first_name} ${last_name} is ${enrolled} enrolled.`
// }

//^^^^^messy^^^^^
//clean \/ \/

type Student = {
    student_id: number,
    first_name: string,
    last_name: string,
    is_enrolled: boolean
}

type StudentGPA = {
    GPA_value: number
}

type StudentWithGPA = Student & StudentGPA


let student_info = (info:StudentWithGPA, school:string= "West High") : string => {
    let enrolled = info.is_enrolled ?"" : "not"
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.`
}

console.log(student_info({
    student_id: 514,
    first_name: "Dylan",
    last_name: "Abbett",
    is_enrolled: true,
    GPA_value: 4.2
}))


// -------- interfaces:

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet: () => void;
}

const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
};

person.greet();