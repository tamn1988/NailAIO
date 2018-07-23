import React from 'react';
import {addService} from '../actions/services';


export default class AddServiceForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            service: '',
            amount: ''
        }

        this.onServiceChange = this.onServiceChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onServiceChange(e) {
        const service = e.target.value
        this.setState(() => ({service}))
    }

    onAmountChange(e){
        const amount = e.target.value;
        this.setState(()=>{
            return {
                amount: amount
            }
        })
    }

    onSubmit(e){
        e.preventDefault();
        addService(this.state);
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Service Name" value={this.state.service} onChange={this.onServiceChange} required />
                <input type="number" step="0.01" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}  required/>
                <input type="submit" />
            </form>
        )
    }
}