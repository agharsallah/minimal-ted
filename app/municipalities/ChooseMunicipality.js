import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';

export default class ChooseMunicipality extends Component{

	constructor(props){
		super(props);
		this.state={munstate:'all'}
		this.handleMunState = this.handleMunState.bind(this);

	}
	
	handleMunState (event,value){ 
    console.log(value); this.setState({munstate:"old"})};
	render(){
		return(
			<div style={{position:"relative"}}>                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px"}}>
                    <RaisedButton label="old" value='old' primary={true} onTouchTap={this.handleMunState(this.value)} />
                    <RaisedButton label="new" value='new' secondary={true} onTouchTap={this.handleMunState(this.value)} />
                    
                  </div>
                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} />
                </div> 
		);
	}
}
	
