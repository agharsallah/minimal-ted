/*this component contains the layout and the widgets */
import React, { Component } from 'react';
import Layout from './Layout';
import Widget from './Widget'
import Translate from 'react-translate-component';

class ElectoralData extends Component{
	constructor(props) {
		super(props);
		this.state = {
			direction : 'left-to-right'
		};
		this.handleSend= this.handleSend.bind(this);
	}
		/*need to know which language is chosen to send to son widget 'rtl' or 'ltr' */
		handleSend(value){
			if (value == 'ar') {
				 this.setState({direction : 'right-to-left'});
			}else{
				 this.setState({direction : 'left-to-right'});
			}
		}
	render(){
		//we get the title nd subtitle of the widget from the localTranslate file

		const TBlankByDelegation = <Translate type="text" content="electiondata.TBlankByDelegation"/>
		const SBlankByDelegation = <Translate type="text" content="electiondata.SBlankByDelegation"/>
		
		const TballotState = <Translate type="text" content="electiondata.TballotState"/>
		const STballotState = <Translate type="text" content="electiondata.STballotState"/>
		
		const TAgeTurnoutDelegation = <Translate type="text" content="electiondata.TAgeTurnoutDelegation"/>
		const SAgeTurnoutDelegation = <Translate type="text" content="electiondata.SAgeTurnoutDelegation"/>
		
		const TAgeTurnoutDelegationAll = <Translate type="text" content="electiondata.TAgeTurnoutDelegationAll"/>
		const SAgeTurnoutDelegationAll = <Translate type="text" content="electiondata.SAgeTurnoutDelegationAll"/>
		
		const TTurnoutGender = <Translate type="text" content="electiondata.TTurnoutGender"/>
		const STurnoutGender = <Translate type="text" content="electiondata.STurnoutGender"/>
		
		const TTurnoutPresedential = <Translate type="text" content="electiondata.TTurnoutPresedential"/>
		const STurnoutPresedential = <Translate type="text" content="electiondata.STurnoutPresedential"/>
		
		const elecType = 'Presidential'
		const elecYear = '2014'
		const link = '/data/par14/'
		return(
			<div>
			<Layout SendToFather={this.handleSend} type='electoral_data'/>
					{/*the widget component accepts the title  sub img link and map link */}

					<div className='col-md-12' >
						<h2 className="lefttitle" > Invalid Ballots</h2>
						<Widget position='col-md-6' title ={TBlankByDelegation} subtitle={SBlankByDelegation} imgsrc="Blank-ballots-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link} imageopacity="1"/>
						<Widget position='col-md-6' title ={TballotState} subtitle={STballotState} imgsrc="All-Blank-ballots-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link} imageopacity="1"/>					
					</div>
					<div className='col-md-12' >
						<h2 className="lefttitle" > Age Turnout</h2>
						<Widget position='col-md-6' title ={TAgeTurnoutDelegation} subtitle={SAgeTurnoutDelegation} imgsrc="Age-Turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link} imageopacity="0.3"/>
						<Widget position='col-md-6' title ={TAgeTurnoutDelegationAll} subtitle={SAgeTurnoutDelegationAll} imgsrc="All-Age-Turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link} imageopacity="0.3"/>
					</div>
					<div className="col-md-12">
						<h2  className="lefttitle" > Gender Turnout</h2>
						<Widget position='col-md-6' title ={TTurnoutGender} subtitle={STurnoutGender} imgsrc="Gender-turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link} imageopacity="0.3"/>
					</div>
		</div>
		);
	}
};

export default ElectoralData