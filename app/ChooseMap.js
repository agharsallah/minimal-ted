import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import Layout from './Layout';
import Highchart from './Highchart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FindIcon from 'material-ui/svg-icons/action/find-in-page';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PreByGender from './presMap/PreByGender';
import TestBallot from './presMap/TestBallot';
import BallotState from './presMap/BallotState';
import TestDraw from './presMap/TestDraw';
import BlankBallotsDelegation from './presMap/BlankBallotsDelegation';
import AgeTurnoutDelegation from './presMap/AgeTurnoutDelegation';
import AllAgeTurnoutDelegation from './presMap/AllAgeTurnoutDelegation';
import TurnoutGender from './presMap/TurnoutGender';
import CommMarker from './presMap/CommMarker';
import Translate from 'react-translate-component';
import {browserHistory} from 'react-router';

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
     const invalidTranslation= "map."+this.state.value;
     switch(this.props.param.mapId) {
    case 'full':
        return  window.location.href="http://tunisiaelectiondata.com/#/stories/par/full" 
        break;   
    case "comparingM-Vs-B":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljnd3i6k.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;
    case "turnout-r1vr2":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljnf75jo.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;
    case "turnout-r2":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljn1pb40.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;
    case "canceled-ballot":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljn2hbp2.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;
    case "marzouki-r1":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljn3f695.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;
     case "marzouki-r2":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljna5109.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;       
     case "Number-of-polling":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljmif17a.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;       
     case "beji-r1":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljn3ng0a.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break;       
     case "Beji-R2":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.ljn4g779.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
         break;   
    
    case "par-by-gender":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.k73jc1n0.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe> 
        break; 
    case "par-nahdha-res":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.k73ogne0.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break; 
    case "par-upl-res":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.k740b8f9.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe>
        break; 
    case "par-nida-res":
        return <iframe width="100%" height="600px" frameBorder="0" src="http://a.tiles.mapbox.com/v4/tunisia.k73m3p3b.html?access_token=pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g"></iframe> 
        break; 

    case "nahdha":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/1" 
                break; 
    case "cpr":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/4" 
                break; 
    case "aridaa":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/2" 
                break; 
    case "ETTAKATOL":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/3" 
                break; 
        case "PDP":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/5" 
                break; 
    case "afek":
        returnwindow.location.href="http://tunisiaelectiondata.com/#/stories/nca/51" 
                break; 
    case "turnout":
        returwindow.location.href="http://tunisiaelectiondata.com/#/stories/nca/6" 
                break; 
    case "eligible":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/7" 
                break; 
        case "active":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/8" 
                break; 
    case "passive":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/9" 
                break; 
    case "wasted":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/10" 
                break; 
    case "blanc":
        return window.location.href="http://tunisiaelectiondata.com/#/stories/nca/11" 
                break; 
    case "Blank-ballots-by-delegation":
        return (<div style={{position:"relative"}}>
                {/*<div style={{width: '800px',overflow: "hidden",height:"80px"}} >*/}
                    <div className="lefttitle" style={{position:"absolute",zIndex: "2",marginTop:"200px",marginLeft:"30px"}}>
                        <h1><Translate content={invalidTranslation}/></h1>
                    </div>  
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px",marginLeft:"30px"}}>
                    <SelectField
                    floatingLabelText={<Translate content="map.chooseParameter"/>}
                    value={this.state.value}
                    onChange={this.handleChange}
                    style = {{width:"200px",marginLeft:"10px",float:"right"}}
                    floatingLabelStyle  ={{color:"#03a9f4",fontSize:"x-large",top:"25px"}}
                    labelStyle = {{color:"#ff5722",fontSize:"xx-large"}}
                    iconStyle ={{fill:"#03a9f4",top:"10px",height:"47px",width:"65px"}}
                  >
                      <MenuItem value={"canceled"} primaryText={<Translate content="map.canceled"/>} />
                      <MenuItem value={"blank"} primaryText={<Translate content="map.blank"/>} />
                      <MenuItem value={"spoiled"} primaryText={<Translate content="map.spoiled"/>} />
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
        return (<div>
                    <div className="lefttitle" style={{position:"absolute",zIndex: "2",marginTop:"250px",marginLeft:"30px"}}>
                    <h1><Translate content="map.invalid_title"/></h1>
                    </div>
                    <BallotState />
            </div>
            )
        break;
    case "Age-Turnout-by-delegation":
        return (<div style={{position:"relative"}}>                    
                  <div style={{position:"absolute",zIndex: "2",marginTop:"300px"}}>
                    <SelectField
                    floatingLabelText="choose parameter"
                    value={this.state.ageturnout}
                    onChange={this.handleAgeturnout}
                    style = {{width:"200px",marginLeft:"10px",float:"right"}}
                    floatingLabelStyle  ={{color:"#03a9f4",fontSize:"x-large",top:"25px"}}
                    labelStyle = {{color:"#ff5722",fontSize:"xx-large"}}
                    iconStyle ={{fill:"#03a9f4",top:"10px",height:"47px",width:"65px"}}                  >
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
    
    
    default:
        return(<h1>An error has occured</h1>)
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