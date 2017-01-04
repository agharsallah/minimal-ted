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
import FindIcon from 'material-ui/svg-icons/action/find-in-page';
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
        return (<div style={{position:"relative"}}>
                {/*<div style={{width: '800px',overflow: "hidden",height:"80px"}} >*/}
                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px",float:"right",width:"100%",marginLeft:"-11px"}}>
                    <SelectField
                    floatingLabelText="choose parameter"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style = {{width:"150px",marginLeft:"10px",float:"right"}}
                    floatingLabelStyle  ={{color:"#03a9f4"}}
                    labelStyle = {{color:"#b53f6f"}}

                  >
                      <MenuItem value={1} primaryText="canceled" />
                      <MenuItem value={2} primaryText="blank" />
                      <MenuItem value={3} primaryText="spoiled" />
                  </SelectField>
                  </div>

                  {/*<List style = {{width:"150px",float: "left",marginLeft:"50px"}}>
                    <ListItem  disableKeyboardFocus = {true} disabled={true} rightIcon={<FindIcon  style ={{top:'20px', right:"-130px"}} />} >
                    <TextField  hintText="Search delegation" style = {{width:"250px",}}/>
                    </ListItem>
                  </List>
              </div>*/}
                <TestBallot  style={{position:"absolute"}} />

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