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

		const TBlankByDelegation = <Translate type="text" content="pred2014.TBlankByDelegation"/>
		const SBlankByDelegation = <Translate type="text" content="pred2014.SBlankByDelegation"/>
		
		const TballotState = <Translate type="text" content="pred2014.TballotState"/>
		const STballotState = <Translate type="text" content="pred2014.STballotState"/>
		
		const TAgeTurnoutDelegation = <Translate type="text" content="pred2014.TAgeTurnoutDelegation"/>
		const SAgeTurnoutDelegation = <Translate type="text" content="pred2014.SAgeTurnoutDelegation"/>
		
		const TAgeTurnoutDelegationAll = <Translate type="text" content="pred2014.TAgeTurnoutDelegationAll"/>
		const SAgeTurnoutDelegationAll = <Translate type="text" content="pred2014.SAgeTurnoutDelegationAll"/>
		
		const TTurnoutGender = <Translate type="text" content="pred2014.TTurnoutGender"/>
		const STurnoutGender = <Translate type="text" content="pred2014.STurnoutGender"/>
		
		const TTurnoutPresedential = <Translate type="text" content="pred2014.TTurnoutPresedential"/>
		const STurnoutPresedential = <Translate type="text" content="pred2014.STurnoutPresedential"/>
		
		const elecType = 'Presidential'
		const elecYear = '2014'
		const link = '/data/par14/'
		return(
			<div>
			<Layout SendToFather={this.handleSend} type='electoral_data'/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
						<Widget title ={TBlankByDelegation} subtitle={SBlankByDelegation} imgsrc="Blank-ballots-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link}/>
						<Widget title ={TballotState} subtitle={STballotState} imgsrc="All-Blank-ballots-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link}/>
						<Widget title ={TAgeTurnoutDelegation} subtitle={SAgeTurnoutDelegation} imgsrc="Age-Turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link}/>
					</div>
					<div className='col-md-12' >
						<Widget title ={TAgeTurnoutDelegationAll} subtitle={SAgeTurnoutDelegationAll} imgsrc="All-Age-Turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link}/>
						<Widget title ={TTurnoutGender} subtitle={STurnoutGender} imgsrc="Gender-turnout-by-delegation.png"   elecType={elecType} elecYear={elecYear} link={link}/>
						<Widget title ={TTurnoutPresedential} subtitle={STurnoutPresedential} imgsrc="comm-marker.png"   elecType={elecType} elecYear={elecYear} link={link}/>
					</div>
		</div>
		);
	}
};

export default ElectoralData