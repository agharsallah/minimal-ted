import React, { Component } from 'react';
import Tree from './Tree'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
export class TreeContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {data:"seats"}
		this.handleData = this.handleData.bind(this);

	}
	handleData (event){ 
    	let value =event.target.value; this.setState({data:value})
    };
	
	render() {
		return (
			<div style={{position:"relative"}}>
				<div style={{position:"absolute",zIndex: "3",marginTop:"10px",marginLeft:'80%',fontSize:'20px',fontFamily:'Georgia'}}>
	                <p  >Choose a Parameter !</p>
	                	<RadioButtonGroup onChange={this.handleData}  name="infos" defaultSelected="seats" style={{height:'55px !important'}} >
					    	<RadioButton
					        value="seats"
					        label="Seats"
					        checkedIcon={<ActionInfo />}
      						uncheckedIcon={<ActionInfoOutline />}	
					      />
					      <RadioButton
					        value="citizens"
					        label="Citizens"
							checkedIcon={<ActionInfo />}
      						uncheckedIcon={<ActionInfoOutline />}
					      />
					      <RadioButton
					        value="area"
					        label="Area"
					        checkedIcon={<ActionInfo />}
      						uncheckedIcon={<ActionInfoOutline />}	
					      />
					    </RadioButtonGroup>
	            </div>	
				<Tree  style={{position:"absolute"}} datatoshow={this.state.data}/>
			</div>
		);
	}
}


export default TreeContainer