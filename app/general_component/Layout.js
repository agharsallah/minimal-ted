/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import {Link,IndexLink } from 'react-router';
import activeComponent from 'react-router-active-component'
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
  }
	componentWillMount() {
		 		counterpart.getLocale();
	}

	handleClick (event) {
        console.log(event)
	   this.setState({event})
	   counterpart.setLocale(event);
	   //this.props.SendToFather(event)
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
        let NavItem = activeComponent('li');

		return(
			<div>

                 <div className="wrapper reveal-side-navigation">
		          <div className="wrapper-inner">
                <header className="header header-fixed-on-mobile" data-sticky-threshold="0" data-bkg-threshold="390" data-compact-threshold="390">
                    <div className="header-inner">
                        <div className="row nav-bar">
                            <div className="column width-12 nav-bar-inner">
                                <div className="logo">
                                    <div className="logo-inner">
                                        <a href="index.html" > <h3>TunisieElection</h3></a>
                                        <a href="index.html"><img src="" alt="Logo" /></a>
                                    </div>
                                </div>
                                <nav className="navigation nav-block secondary-navigation nav-right">
                                    <ul>
                                        <li>
                                            {/* Dropdown Cart Overview */}
                                            <div className="dropdown">
                                                <a  className="nav-icon cart button no-page-fade"><span className="cart-indication"><span ><i className="fa fa-language" aria-hidden="true"></i></span> </span></a>
                                                <ul className="dropdown-list custom-content cart-overview">
                                                    <li className="cart-item">
                                                        <div className="product-details">
                                                            <a href="" className="product-title" onClick={this.handleClick.bind(this,"en")}>
                                                                English
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="product-details">
                                                            <a href="" className="product-title" onClick={this.handleClick.bind(this,"fr")}>
                                                                French
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="product-details">
                                                            <a href="" className="product-title" onClick={this.handleClick.bind(this,"ar")}>
                                                                Arabic
                                                            </a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li className="aux-navigation hide">
                                            {/* Aux Navigation */}
                                            <a href="#" className="navigation-show side-nav-show nav-icon">
                                                <span className="icon-menu"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav className="navigation nav-block primary-navigation nav-right">
                                    <ul>
                                            <NavItem to={'/'} activeClassName="current">{home}</NavItem>
                                            <NavItem to={'/Municipalities/all'} activeClassName="current" >{local_election}</NavItem>
		                                    <NavItem to={'/data'} activeClassName="current">{election_data}</NavItem>
                                            <NavItem to={'/result'} activeClassName="current">{election_result}</NavItem>
                                            <NavItem to={'/webradar'} activeClassName="current">{web_radar}</NavItem>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header> 
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
