import React, { Component } from 'react';


class Infos extends Component {
	constructor (props) {
		super(props)
		this.state = {datatoshow:props.datatoshow,size:""}
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({size:nextProps.size});

		if (this.state.datatoshow!=nextProps.datatoshow) {
			this.setState({size:""}); 
			this.setState({datatoshow:nextProps.datatoshow}); 
		}
	}
	componentWillMount() {
		var datatoshow = ""
	}

	render() {
		var size = this.props.size;
		
		if (this.props.datatoshow == "area") {
			var datatoshow =" Km²"
		}else if (this.props.datatoshow == "citizens"){
			var datatoshow =" Citizen"
		}else if (this.props.datatoshow == "seats"){
			var datatoshow =" Seats"
		}else{
			var datatoshow =" "
		}
		return(
   		<p  style={{marginLeft:"80%",marginTop:"150px",position:"absolute",fontSize:'20px',fontFamily:'Georgia'}}>
   			{this.props.munname}
   			<br/>
   			{this.state.size} {datatoshow}
   		</p>
    );
	}
}
export default Infos
