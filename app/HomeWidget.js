import React, { Component } from 'react';
import {Link} from 'react-router';


export default class HomeWidget extends Component{
	
	render(){

		return(
				<div className={this.props.width} >
					<article className={this.props.styles} style={{width:"100%"}}>
	                  <span className="image">
	                    <img src={this.props.links} alt="" />
	                  </span>
	                  <Link to={this.props.idd}>
	                    <h1>{this.props.name}</h1>
	                    <div className="content">
	                      <h3>{this.props.description}</h3>
	                    </div>
	                  </Link>
	                </article>
				</div>
		);
	}
};