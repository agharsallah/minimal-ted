import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import PreByGender from './presMap/PreByGender';
import TestBallot from './presMap/TestBallot';
import TestDraw from './presMap/TestDraw';
import BlankBallotsDelegation from './presMap/BlankBallotsDelegation';
import Layout from './Layout';
import Highchart from './Highchart';
import Select from 'grommet/components/Select';

export default class ChooseMap extends Component{
  constructor(props) {
    super(props);
    this.state={lat:35.00,lng:9.90}
  }
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

                     <Select onSearch={false}
                    inline={false}
                    multiple={false}
                    options={["one", "two", "three", "four", "five", "six", "seven", "eight"]}
                    value={undefined}
                    onChange={undefined} />

                <TestBallot/>

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