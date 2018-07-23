import React from 'react';
import AddEmployee from '../containers/EmployeeForm';
import { employeeFormHOC } from '../containers/EmployeeForm';
import AddServiceFrom from '../containers/AddServiceForm'
import EmployeesList from '../containers/EmployeesList';


const Manage = () => {
    const EmployeeForm = employeeFormHOC({
        name: '',
        pay: 0,
        position: '',
        isEmployed: true
    })

    return (
        <div>
            <h1>Manage</h1>
            <EmployeeForm />
            <EmployeesList />
            <AddServiceFrom />
        </div>
    )
}

export default Manage;