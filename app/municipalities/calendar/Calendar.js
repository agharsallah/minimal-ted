import React, { Component } from 'react';
import Layout from '../../Layout'
import CalendarStep from "./CalendarStep"

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../../../locales/en'));
counterpart.registerTranslations('fr',require('./../../../locales/fr'));
counterpart.registerTranslations('ar',require('./../../../locales/ar'));

class Calendar extends Component {
    render() {
        return (
            <div>
            <Layout/>
                <section className="section-block replicable-content bkg-grey-ultralight">
					<div className="row">
						<div className="column width-12">
							<h2 className="mb-80">Official Elections<br/>Calendar</h2>
						</div>
                        <div className="col-md-12">
                        <div className="col-md-4">ddssssssssssssssssss</div>
                            <div className="col-md-8">
                                <ul className="timeline vertical-indication">
                                    <CalendarStep color="color-skype" date="Calendar.title1" title="Calendar.description1" description="Calendar.date1" year="Calendar.year1" />
                                    <CalendarStep color="color-skype" date="Calendar.title2" title="Calendar.description2" description="Calendar.date2" year="Calendar.year2"/>
                                    <CalendarStep color="color-skype" date="Calendar.title3" title="Calendar.description3" description="Calendar.date3" year="Calendar.year3"/>
                                    <CalendarStep color="color-pinterest" date="Calendar.title4" title="Calendar.description4" description="Calendar.date4" year="Calendar.year4"/>
                                    <CalendarStep color="color-pinterest" date="Calendar.title5" title="Calendar.description5" description="Calendar.date5" year="Calendar.year5"/>
                                </ul>
                            </div>
                        </div>
                    </div>
				</section>
            </div>
        );
    }
}

export default Calendar;