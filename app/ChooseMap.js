import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import PreByGender from './presMap/PreByGender';
import TestBallot from './presMap/TestBallot';
import TestDraw from './presMap/TestDraw';
import BlankBallotsDelegation from './presMap/BlankBallotsDelegation';
import Layout from './Layout';
import Highchart from './Highchart'

const ChooseMap = (props)=>{

  switch(props.param.mapId) {
    case 'full':
      	return <LeafletMap/> 
        break; 
    case 'Blank-ballots-by-delegation':
        return <BlankBallotsDelegation/> 
        break;       
    case "comparingM-Vs-B":
      	return <Highchart/> 
        break;
    case "pre-by-gender":
        return <PreByGender test='maleTurnout'/> 
        break;
    case "turnout-by-age":
        return <TestBallot/> 
        break;
    case "turnout-by-age2":
        return <TestDraw/> 
        break;    
    
    default:
        return(<h1>{console.log('err')}</h1>)
}
  return(

   		<div style={{height:'auto'}}>

   			<Layout/>

   		</div>
  );

}

export default ChooseMap