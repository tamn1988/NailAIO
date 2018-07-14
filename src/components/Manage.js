import React from 'react';
import AddEmployee from '../containers/EmployeeForm';
import EmployeeForm from '../containers/EmployeeForm';
import EmployeesList from '../containers/EmployeesList';

const Manage = ()=> (
    <div>
        <h1>Manage</h1>
        <EmployeeForm />
        <EmployeesList />
    </div>
)

export default Manage;