import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import  "./react-big-calendar.css"
import './styles.less';
import './prism.less';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class BigCalendarIndex extends Component {
    render() {
        const myEventsList=[{
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2015, 3, 1),
    'end': new Date(2015, 3, 20)
  }]
        return (
            <div style={{height:'600px'}}>
    <BigCalendar
      events={myEventsList}
      defaultDate={new Date(2015, 3, 1)}
    />
  </div>
        );
    }
}

export default BigCalendarIndex;