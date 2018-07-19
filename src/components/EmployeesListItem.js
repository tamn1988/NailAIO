import React from 'react';
import {employeeFormHOC} from '../containers/EmployeeForm';



export default class EmployeesListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onEdit() {
        this.setState({
            edit: true,

        })
    }

    onClose(){
        this.setState({
            edit: false
        })
    }

    render() {
        const EditEmployee = employeeFormHOC({
            name: this.props.name,
            pay: this.props.pay,
            position: this.props.position,
            isEmployed: this.props.isEmployed.toString()
        })

        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.pay}</li>
                    <li>{this.props.position}</li>
                    <li>{this.props.isEmployed.toString()}</li>
                    <li><button onClick={this.onEdit}>Edit</button></li>
                    <li><button onClick={this.onClose}>Close</button></li>
                    {this.state.edit && <EditEmployee />}
                </ul>
            </div>
        )
    }
}