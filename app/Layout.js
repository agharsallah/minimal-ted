import React, { Component } from 'react';
import {Link} from 'react-router'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import counterpart  from 'counterpart';
import Translate from 'react-translate-component';

export default class Layout extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	value: 'en'
	};
    this.handleChange = this.handleChange.bind(this);
  }
	componentWillMount() {
		counterpart.getLocale()
	}
	handleChange (event, index, value) {
	   this.setState({value})
	   counterpart.setLocale(value);
	   this.props.SendToFather(value)
	};

	render(){
		const home = <Translate type="text" content="navbar.home"/>
		const projects = <Translate type="text" content="navbar.projects"/>
		const about = <Translate type="text" content="navbar.about"/>
		const en = <Translate type="text" content="navbar.en"/>
		const fr = <Translate type="text" content="navbar.fr"/>
		const ar = <Translate type="text" content="navbar.ar"/>

		return(
			<div>

		<div className="navbar navbar-info">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="javascript:void(0)">Tun Elec Data</a>
		    </div>
		    <div className="navbar-collapse collapse navbar-responsive-collapse">
		      <ul className="nav navbar-nav">
		        <li><Link to={'/'} 		 activeClassName="activeN">{home}</Link></li>
		        <li ><Link to={'/Projects'}  activeClassName="activeN">{projects}</Link></li>
		        <li ><Link to={'/About'} 	 activeClassName="activeN">{about}</Link></li>
		        <li>      	
		        	<DropDownMenu labelStyle={{color:'inherit'}} value={this.state.value} onChange={this.handleChange}>
			          <MenuItem value={'en'} primaryText={en} />
			          <MenuItem value={'fr'} primaryText={fr} />
			          <MenuItem value={'ar'} primaryText={ar} />
			        </DropDownMenu>
			    </li>
		      </ul>
		    </div>
		  </div>
		</div>

      	{this.props.children}
      	

    </div>
		);
	}
};

