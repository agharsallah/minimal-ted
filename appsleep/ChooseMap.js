import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import PreByGender from './presMap/PreByGender';
import TestBallot from './presMap/TestBallot';
import BallotState from './presMap/BallotState';
import TestDraw from './presMap/TestDraw';
import BlankBallotsDelegation from './presMap/BlankBallotsDelegation';
import AgeTurnoutDelegation from './presMap/AgeTurnoutDelegation';
import AllAgeTurnoutDelegation from './presMap/AllAgeTurnoutDelegation';
import TurnoutGender from './presMap/TurnoutGender';
import Layout from './Layout';
import Highchart from './Highchart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FindIcon from 'material-ui/svg-icons/action/find-in-page';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ChooseMap extends Component{
  constructor(props) {
    super(props);
    this.state={lat:35.00,lng:9.90,value:"canceled",ageturnout:"_18_21",genderturnout:"male"} ;
    this.handleChange = this.handleChange.bind(this);
    this.handleAgeturnout = this.handleAgeturnout.bind(this);
    this.handlegendermale = this.handlegendermale.bind(this);
    this.handlegenderfemale = this.handlegenderfemale.bind(this);
  }

  handleChange (event, index, value){this.setState({value})};
  handleAgeturnout (event, index, ageturnout){this.setState({ageturnout})};
  handlegendermale (event){this.setState({genderturnout:"maleTurnout"})};
  handlegenderfemale (event){this.setState({genderturnout:"womenTurnout"})};

  render(){
     switch(this.props.param.mapId) {
    case 'full':
        return <LeafletMap/> 
        break;   
    case "comparingM-Vs-B":
        return <Highchart/> 
        break;
    case "pre-by-gender":
        return <PreByGender test='maleTurnout'/> 
        break;
    case "Blank-ballots-by-delegation":
        return (<div style={{position:"relative"}}>
                {/*<div style={{width: '800px',overflow: "hidden",height:"80px"}} >*/}
                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px"}}>
                    <SelectField
                    floatingLabelText="choose parameter"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style = {{width:"150px",marginLeft:"10px",float:"right"}}
                    floatingLabelStyle  ={{color:"#03a9f4"}}
                    labelStyle = {{color:"#ff5722",fontSize:"xx-large"}}

                  >
                      <MenuItem value={"canceled"} primaryText="canceled" />
                      <MenuItem value={"blank"} primaryText="blank" />
                      <MenuItem value={"spoiled"} primaryText="spoiled" />
                  </SelectField>
                  </div>

                  {/*<List style = {{width:"150px",float: "left",marginLeft:"50px"}}>
                    <ListItem  disableKeyboardFocus = {true} disabled={true} rightIcon={<FindIcon  style ={{top:'20px', right:"-130px"}} />} >
                    <TextField  hintText="Search delegation" style = {{width:"250px",}}/>
                    </ListItem>
                  </List>
              </div>*/}
                <BlankBallotsDelegation  style={{position:"absolute"}} value={this.state.value} />

                </div> )
        break;
    case "All-Blank-ballots-by-delegation":
        return (<BallotState />)
        break;
    case "Age-Turnout-by-delegation":
        return (<div style={{position:"relative"}}>                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px"}}>
                    <SelectField
                    floatingLabelText="choose parameter"
                    value={this.state.ageturnout}
                    onChange={this.handleAgeturnout}
                    style = {{width:"150px",marginLeft:"10px",float:"right"}}
                    floatingLabelStyle  ={{color:"#03a9f4"}}
                    labelStyle = {{color:"#ff5722",fontSize:"xx-large"}}
                  >
                      <MenuItem value={"_18_21"} primaryText="18-21" />
                      <MenuItem value={"_22_30"} primaryText="22-30" />
                      <MenuItem value={"_31_40"} primaryText="31-40" />
                      <MenuItem value={"_41_50"} primaryText="41-50" />
                      <MenuItem value={"_51_60"} primaryText="51-60" />
                      <MenuItem value={"_61_70"} primaryText="61-70" />
                      <MenuItem value={"plus70"} primaryText="+ 70" />
                  </SelectField>
                  </div>
                <AgeTurnoutDelegation  style={{position:"absolute"}} value={this.state.ageturnout} />
                </div> )        
        break;
    case "All-Age-Turnout-by-delegation":
        return (<AllAgeTurnoutDelegation />)
        break;
    case "Gender-turnout-by-delegation":
        return (<div style={{position:"relative"}}>                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px"}}>
                    <RaisedButton label="Male" primary={true} onTouchTap={this.handlegendermale} />
                    <RaisedButton label="Female" secondary={true} onTouchTap={this.handlegenderfemale} />
                    
                  </div>
                <TurnoutGender  style={{position:"absolute"}} value={this.state.genderturnout} />
                </div> )        
        break;
    case "turnout-by-age2":
        return <TestDraw/> 
        break;    
    
    default:
        return(<h1>{console.log('err')}</h1>)
}

  }
};

/*const ChooseMap = (props)=>{

 
  return(

      <div style={{height:'auto'}}>

        <Layout/>

      </div>
  );

}*/

//export default ChooseMap