import React, { Component } from 'react';
import CalendarStep from "./CalendarStep"

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../../../locales/en'));
counterpart.registerTranslations('fr',require('./../../../locales/fr'));
counterpart.registerTranslations('ar',require('./../../../locales/ar'));

class Timeline extends Component {
    render() {

        const array=[ <CalendarStep color="color-skype" title="Calendar.title1" description="Calendar.description1" date="Calendar.date1" year="Calendar.year1" />
                    ,<CalendarStep color="color-skype" title="Calendar.title2" description="Calendar.description2" date="Calendar.date2" year="Calendar.year2"/>
                    ,<CalendarStep color="color-pinterest" title="Calendar.title4" description="Calendar.description4" date="Calendar.date4" year="Calendar.year4"/>
                    ,<CalendarStep color="color-pinterest" title="Calendar.title5" description="Calendar.description5" date="Calendar.date5" year="Calendar.year5"/>
                    ,<CalendarStep color="color-skype" title="Calendar.title3" description="Calendar.description3" date="Calendar.date3" year="Calendar.year3"/>]
        
        var timelinetorender=[];
        for (var i=0; i < array.length; i++) {

            
                if(((counterpart(array[i].props.title))==="Conditions") && (this.props.buttonclicked=="Conditions")){
                    timelinetorender.push(array[i]);
                } else  if((counterpart(array[i].props.title))==="Registration" && this.props.buttonclicked=="Registration"){
                    timelinetorender.push(array[i]);
                }else if(this.props.buttonclicked=="all") {

                timelinetorender.push(array[i]);
            } 

        }
        return (
                <ul className="timeline vertical-indication">
                   {timelinetorender}
                 </ul>
        );

    }
}

export default Timeline;