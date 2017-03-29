/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import {Link,IndexLink } from 'react-router';

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

		/*this config is set to allow navbar language transtlation*/
		const home = <Translate type="text" content="navbar.home"/>
		const local_election = <Translate type="text" content="navbar.municipalities"/>
		const election_data = <Translate type="text" content="navbar.electoral_data"/>
		const election_result = <Translate type="text" content="navbar.electoral_result"/>
		const web_radar = <Translate type="text" content="navbar.webradar"/>
		const about = <Translate type="text" content="navbar.about"/>
		const en = <Translate type="text" content="navbar.en"/>
		const fr = <Translate type="text" content="navbar.fr"/>
		const ar = <Translate type="text" content="navbar.ar"/>


		const electoral_data = <Translate type="text" content="navbar.electoral_data"/>
		const electoral_result = <Translate type="text" content="navbar.electoral_result"/>
/*		const Presedential = <Translate type="text" content="navbar.Presedential"/>
		const Parlamentary = <Translate type="text" content="navbar.Parlamentary"/>
		const NCA = <Translate type="text" content="navbar.NCA"/>
*/		return(
			<div>

		<div className="navbar">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" style={{fontSize:'20px',marginRight:"15px"}} href="/">TunisieElection</a>
		    </div>
		    <div className="navbar-collapse collapse navbar-responsive-collapse">
		      <ul className="nav navbar-nav navbar-style">
		        <li><Link to={'/'} activeClassName="activeN">{home}</Link></li>
{/*		        <li>
			 		<DropDownMenu labelStyle={{color:'inherit'}} value={this.props.type} >
			          <MenuItem value={'electoral_data'} label={"data"} primaryText={electoral_data} containerElement={<Link to="/data" activeClassName="activeN" />}/>
			          <MenuItem value={'electoral_result'} primaryText={electoral_result} containerElement={<Link to="/result" activeClassName="activeN"/>}/>
			    </DropDownMenu>
		        </li>*/}
		        
		        <li ><Link to={'/Municipalities/all'} activeClassName="activeN">{local_election}</Link></li>
		        <li ><Link to={'/data'} activeClassName="activeN">{election_data}</Link></li>
		        <li ><IndexLink to={'/result'} activeClassName="activeN">{election_result}</IndexLink></li>
		        <li ><IndexLink to={'/webradar'} activeClassName="activeN">{web_radar}</IndexLink></li>
						<li style={{float:"right"}}>      	
		        	<DropDownMenu labelStyle={{color:'inherit'}} value={this.state.value} onChange={this.handleChange} >
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
	Layout.defaultProps = {
	  type: 'electoral_data'
	};
