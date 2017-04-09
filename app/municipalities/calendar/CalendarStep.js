import React, { Component } from 'react';
import Translate    from 'react-translate-component';

const CalendarStep = (props)=>{
    const date=props.date;
    const title=props.title;
    const description=props.description;
    const year=props.year;
    const color = props.color;
    return(
            <li>
                <div className="row">
                    <div className="timeline-title column width-5 right left-on-mobile">
                        <div className="horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;">
                            <h5 className="color-grey-light title-small text-uppercase no-margin-bottom"><Translate content={description}/></h5>
                            <p><Translate content={year}/></p>
                        </div>
                    </div>
                    <div className="timeline-description column width-7">
                        <div className="horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;">
                            <h5  className={`mb-10 ${color}`} > <Translate content={date}/></h5>
                            <p className="mb-70" ><Translate content={title}/> </p>
                        </div>
                    </div>
                </div>
            </li>   
    );
}
export default CalendarStep