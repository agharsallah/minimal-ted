import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import PreByGender from './presMap/PreByGender';
import TestBallot from './presMap/TestBallot';
import TestDraw from './presMap/TestDraw';
import BlankBallotsDelegation from './presMap/BlankBallotsDelegation';
import Layout from './Layout';
import Highchart from './Highchart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';

export default class ChooseMap extends Component{
  constructor(props) {
    super(props);
    this.state={lat:35.00,lng:9.90,value:1} ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value){this.setState({value})};

  render(){
     switch(this.props.param.mapId) {
    case 'full':
        return <LeafletMap/> 
        break; 
    case 'Blank-ballots-by-delegation':
        return (<div>
                  <button onClick={()=>this.setState({lat:40, lng:-74})} >hi</button>
                  <BlankBallotsDelegation lat={this.state.lat} lng={this.state.lng} />
              </div>
        ) 
        break;       
    case "comparingM-Vs-B":
        return <Highchart/> 
        break;
    case "pre-by-gender":
        return <PreByGender test='maleTurnout'/> 
        break;
    case "turnout-by-age":
        return (<div>
              
                <div className="col-md-12" style = {{height:'20px'}}>
                    <SelectField
                    className = "col-md-5"
                    floatingLabelText="choose parameter"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style = {{width:"150px",height:'20px'}}
                  >
                      <MenuItem value={1} primaryText="canceled" />
                      <MenuItem value={2} primaryText="blank" />
                      <MenuItem value={3} primaryText="spoiled" />
                  </SelectField>

                  <List style = {{width:"150px",height:'20px'}} className = "col-md-7">
                    <ListItem  disableKeyboardFocus = {true} disabled={true} rightIcon={<ActionAndroid  style ={{top:'10px', right:"-100px"}} />} ><TextField
                    hintText="Hint Text" style = {{width:"250px"}}/>
                    </ListItem>
                  </List>
                   </div> 

                <TestBallot  style = {{marginTop:'5px'}} />

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