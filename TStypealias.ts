
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
    first_name: string,
    last_name: string,
    age: number
}

interface Employee extends Person {
    employee_ID: number
}

const johnM: Employee = {
    first_name:'john',
    last_name:'smith',
    age: 30,
    employee_ID: 234
}
console.log(`I am ${johnM.first_name} ${johnM.last_name}, and my ID is ${johnM.employee_ID} `)