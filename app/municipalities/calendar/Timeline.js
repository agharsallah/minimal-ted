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
                    ,<CalendarStep color="color-skype" title="Calendar.title3" description="Calendar.description3" date="Calendar.date3" year="Calendar.year3"/>
                    ,<CalendarStep color="color-facebook" title="Calendar.title6" description="Calendar.description6" date="Calendar.date6" year="Calendar.year6"/>
                    ,<CalendarStep color="color-facebook" title="Calendar.title7" description="Calendar.description7" date="Calendar.date7" year="Calendar.year7"/>
                    ,<CalendarStep color="color-google" title="Calendar.title8" description="Calendar.description8" date="Calendar.date8" year="Calendar.year8"/>
                    ,<CalendarStep color="color-soundcloud" title="Calendar.title10" description="Calendar.description10" date="Calendar.date10" year="Calendar.year10"/>
                    ,<CalendarStep color="color-google" title="Calendar.title9" description="Calendar.description9" date="Calendar.date9" year="Calendar.year9"/>
                    ,<CalendarStep color="color-soundcloud" title="Calendar.title11" description="Calendar.description11" date="Calendar.date11" year="Calendar.year11"/>
                    ,<CalendarStep color="color-spotify" title="Calendar.title14" description="Calendar.description14" date="Calendar.date14" year="Calendar.year14"/>
                    ,<CalendarStep color="color-spotify" title="Calendar.title15" description="Calendar.description15" date="Calendar.date15" year="Calendar.year15"/>
                    ,<CalendarStep color="color-tumblr" title="Calendar.title16" description="Calendar.description16" date="Calendar.date16" year="Calendar.year16"/>
                    ,<CalendarStep color="color-tumblr" title="Calendar.title17" description="Calendar.description17" date="Calendar.date17" year="Calendar.year17"/>
                    ]
        
        var timelinetorender=[];
        for (var i=0; i < array.length; i++) {

            
                if(((counterpart(array[i].props.title))==="Conditions") && (this.props.buttonclicked=="Conditions")){
                    timelinetorender.push(array[i]);
                } else  if((counterpart(array[i].props.title))==="Registration" && this.props.buttonclicked=="Registration"){
                    timelinetorender.push(array[i]);
                }else  if((counterpart(array[i].props.title))==="Candidature Acceptance" && this.props.buttonclicked=="Candidature Acceptance"){
                    timelinetorender.push(array[i]);
                }else  if((counterpart(array[i].props.title))==="Electoral Campaign" && this.props.buttonclicked=="Electoral Campaign"){
                    timelinetorender.push(array[i]);
                }else  if((counterpart(array[i].props.title))==="Election" && this.props.buttonclicked=="Election"){
                    timelinetorender.push(array[i]);
                }else  if((counterpart(array[i].props.title))==="Primary Results" && this.props.buttonclicked=="Primary Results"){
                    timelinetorender.push(array[i]);
                }else  if((counterpart(array[i].props.title))==="Final Results" && this.props.buttonclicked=="Final Results"){
                    timelinetorender.push(array[i]);
                }else if(this.props.buttonclicked=="all") {
                    timelinetorender.push(array[i]);
            } 

        }
        return (
                <ul className="timeline vertical-indication ">
                    <div className="mb-50">&nbsp;</div>
                        {timelinetorender}
                    <div className="mb-50">&nbsp;</div>
                 </ul>
        );

    }
}

export default Timeline;