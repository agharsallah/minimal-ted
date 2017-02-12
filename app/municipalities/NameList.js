import React, { Component } from 'react';

const NameList = (props)=>{
	var city = props.Gouvernorate_name ;
  	

  	return(
   		<div>
  	<ul>{namesJson.map(function(object, i){
  		        if (object.circ==city) {
  		   			return <li  key={i}>{object.name_en}</li>

  		   		}
  	    })}</ul>
   		</div>
    );

}
export default NameList

/*export class NameList extends Component {
	render() {
			let city = "Kairouan"
	   			console.log(city
	   				)
		  	var elment =  namesJson.map(function(object, i){
	        if (object.circ==city) {
	   			return <p>{object.name_en}</p>
	   			console.log(object.name_en)
	   			console.log('rr')
	   		}
    })
		return (
			<div><elment/></div>
		);
	}
}*/

