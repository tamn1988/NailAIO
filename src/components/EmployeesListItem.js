import React from 'react';

const EmployeesListItem = ({ isEmployed, name, pay, position }) => (
    <div>
        <ul>
            <li>{name}</li>
            <li>{pay}</li>
            <li>{position}</li>
            <li>{isEmployed.toString()}</li>
        </ul>
    </div>
)

export default EmployeesListItem;