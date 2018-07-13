import database from '../firebase/firebase'

//ADD_EMPLOYEE
export const addEmployee = (employee) => {
    database.ref('/employees').update({
        [employee.name]: {
            ...employee
        }
    })
}

