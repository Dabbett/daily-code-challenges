
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

let student_info = (info:Student) : string => {
    let enrolled = info.is_enrolled ?"" : "not"
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled.`
}

console.log(student_info({
    student_id: 514,
    first_name: "Dylan",
    last_name: "Abbett",
    is_enrolled: true
}))

