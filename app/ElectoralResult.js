import React, { Component } from 'react';
import Layout from './Layout';
import Parlamantary from './Parlamantary';
import Projects from './Projects';
import Nca from './Nca';
import Translate from 'react-translate-component';

class ElectoralResult extends Component{
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
		return(
			<div>
				<Layout SendToFather={this.handleSend} type='electoral_result'/>
						<h2 className="lefttitle" style={{  marginLeft:'2.3%'}} ><Translate type="text" content="electionresult.pres"/> </h2>
				<Projects/>
						<div><h2 className="lefttitle" style={{  marginLeft:'2.3%'}}><Translate type="text" content="electionresult.parl"/> </h2></div>
				<Parlamantary/>
						<h2 className="lefttitle" style={{  marginLeft:'2.3%'}}><Translate type="text" content="electionresult.nca"/></h2>
					
				<Nca/>
			</div>
		);
	}
};
export default ElectoralResult