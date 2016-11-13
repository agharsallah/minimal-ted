import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Widget extends Component{
	
	render(){
		const imgsrc = 'img/' +this.props.imgsrc;
		/*get the map id*/
		const linkk = '/Projects/'+ this.props.imgsrc.match(/.+?(?=\.)/g);
		console.log(linkk)
		
		/*get the direction style as prop whether r-t-l or l-t-r*/
		const direction = this.props.direction + ' p-a' 
		return(
			<div className="col-xs-6 col-sm-12 col-md-3 col-0">
				<div className="box">
					<div className="item">
						<div className="item-overlay active p-a">
							<span className="pull-right label dark-white text-color"><i className="fa fa-envelope-open fa-fw"></i> 2014</span>
							<a href className="pull-left text-u-c label label-md info">Presidential</a>
						</div>
						<img src={imgsrc} className="w-full"/>
					</div>
					<div className={direction}>
						<div className="m-b h-2x"><a href className="_800">{this.props.title}</a></div>
						<p className="h-3x">{this.props.subtitle}</p>
						<div><Link className="btn btn-xs white" to={linkk}>Read More</Link></div>
					</div>
				</div>
			</div>
		);
	}
};