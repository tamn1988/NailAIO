import React from 'react';
import { connect } from 'react-redux';
import EmployeeListItem from '../components/EmployeesListItem'
import {getEmployee} from '../actions/employees';

class EmployeesList extends React.Component {

    componentDidMount() {
        this.props.getEmployee();
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.employees).map((key) => {
                        return <EmployeeListItem key={key} {...this.props.employees[key]} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees || {}
    }
}

const mapDispatchToProps = (dispatch)=> ({
 getEmployee: () => dispatch(getEmployee())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);