import React, { Component } from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class DateFilter extends Component {
    constructor(props) {
        super(props);
        this.state={startDate: moment()};
         this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date){
    this.setState({
      startDate: date
    });
    }
    render() {
        return (
            <div>
               <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />
            </div>
        );
    }
}

export default DateFilter;