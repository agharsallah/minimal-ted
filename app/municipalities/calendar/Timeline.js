import React, { Component } from 'react';
import CalendarStep from "./CalendarStep"

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../../../locales/en'));
counterpart.registerTranslations('fr',require('./../../../locales/fr'));
counterpart.registerTranslations('ar',require('./../../../locales/ar'));

class Timeline extends Component {
    
    constructor(props) {
        super(props);
        this.state={ timelinetorender:[], array:[ <CalendarStep color="color-skype" title="Calendar.title1" description="Calendar.description1" date="Calendar.date1" year="Calendar.year1" />
                    ,<CalendarStep color="color-skype" title="Calendar.title2" description="Calendar.description2" date="Calendar.date2" year="Calendar.year2"/>
                    ,<CalendarStep color="color-pinterest" title="Calendar.title4" description="Calendar.description4" date="Calendar.date4" year="Calendar.year4"/>
                    ,<CalendarStep color="color-pinterest" title="Calendar.title5" description="Calendar.description5" date="Calendar.date5" year="Calendar.year5"/>
                    ,<CalendarStep color="color-skype" title="Calendar.title3" description="Calendar.description3" date="Calendar.date3" year="Calendar.year3"/>] };
    }
    
    componentWillMount() {
                var timeline=[];
         var array=this.state.array;
        for (var i=0; i < array.length; i++) {
            if(((counterpart(array[i].props.title))==="Conditions") && (this.props.buttonclicked=="Conditions")){
                    timeline.push(array[i]);
                } else  if((counterpart(array[i].props.title))==="Registration" && this.props.buttonclicked=="Registration"){
                   timeline.push(array[i]);
                }else if(this.props.buttonclicked=="all") {
                    timeline.push(array[i]);
            }
        }
         this.setState({timelinetorender:timeline});
                     console.log(timeline)
            console.log("First")

    }
    componentWillReceiveProps(nextProps) {
              var timeline=[];
              this.setState({timelinetorender:[]});
         var array=this.state.array;
        for (var i=0; i < array.length; i++) {
            if(((counterpart(array[i].props.title))==="Conditions") && (nextProps.buttonclicked=="Conditions")){
                    timeline.push(array[i]);
                } else  if((counterpart(array[i].props.title))==="Registration" && nextProps.buttonclicked=="Registration"){
                   timeline.push(array[i]);
                }else if(nextProps.buttonclicked=="all") {
                    timeline.push(array[i]);
            }
    }
            console.log(timeline)

             this.setState({timelinetorender:timeline});

    }
    
    
    render() {
        

        return (
                <ul className="timeline vertical-indication">
                       {this.state.timelinetorender.map(function(object, i){
                        return object
                     })}
                 </ul>
        );
    }
}

export default Timeline;