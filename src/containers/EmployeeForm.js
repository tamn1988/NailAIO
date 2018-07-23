import React from 'react';
import { addEmployee } from '../actions/employees';


//Higher order component.
//Use to render the employee form with different default state values
export const employeeFormHOC = ((defaultState) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = defaultState;


        }

        render() {
            return <EmployeeForm state={this.state} {...this.props} />
        }
    }
})


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.state,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPayChange = this.onPayChange.bind(this);
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onIsEmployedChange = this.onIsEmployedChange.bind(this);
    }
    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onPayChange(e) {
        const pay = e.target.value;
        this.setState(() => ({ pay }));
    }

    onPositionChange(e) {
        const position = e.target.value;
        this.setState(() => ({ position }))
    }

    onIsEmployedChange(e) {
        this.setState((prevState) => {
            return {
                isEmployed: !prevState.isEmployed
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        addEmployee(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Employee Name" value={this.state.name} onChange={this.onNameChange}  required/>
                    <input type="number" placeholder="Pay" value={this.state.pay} onChange={this.onPayChange} required />
                    <input type="text" placeholder="Position" value={this.state.position} onChange={this.onPositionChange} required />
                    <select value={this.state.isEmployed} onChange={this.onIsEmployedChange} required>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}