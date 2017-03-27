import React, { Component } from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';


export default class HomeWidget extends Component{
	
	render(){
		const WidgetTitle=this.props.name;
		const WidgetSubTitle=this.props.description;
		return(
				<div className={this.props.width} >
					<article className="style4" style={{width:"100%"}}>
	                  <span className="image">
	                    <img src={this.props.links} alt="" style={{height:"260px"}}/>
	                  </span>
	                  <Link to={this.props.navlink}>
	                    <h2 className="hometitle"><Translate content={WidgetTitle} /></h2>
	                    <div className="content">
	                      <h3 className="mediumPar"><Translate content={WidgetSubTitle} /></h3>
	                    </div>
	                  </Link>
	                </article>
				</div>
		);
	}
};