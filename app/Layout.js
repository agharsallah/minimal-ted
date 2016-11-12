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
    	value: 'en',
    	home:'Home',
    	projects:'Projects',
    	about:'About'
	
	};
    this.handleChange = this.handleChange.bind(this);
  }
	componentWillMount() {
		counterpart.getLocale()
	}
	handleChange (event, index, value) {
	   this.setState({value})
	   if (value=='fr') {
	   	this.setState({home:'Accueil',projects:'Projets',about:'A Propos'})
	   }else if (value == 'ar') {
	   	this.setState({home:'',projects:'',about:''})
	   }else{
	   	this.setState({home:'Home',projects:'Projects',about:'About'})
	   }
	   counterpart.setLocale(value);
	};

	render(){
		const home = <Translate type="text" content="navbar.home"/>
		const projects = <Translate type="text" content="navbar.projects"/>
		const about = <Translate type="text" content="navbar.about"/>
		const en = <Translate type="text" content="navbar.en"/>
		const fr = <Translate type="text" content="navbar.fr"/>

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

