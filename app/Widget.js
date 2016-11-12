import React, { Component } from 'react';
export default class Widget extends Component{
	
	render(){
		const imgsrc = 'img/' +this.props.imgsrc 
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
					<div className="p-a">
						<div className="m-b h-2x"><a href className="_800">{this.props.title}</a></div>
						<p className="h-3x">{this.props.subtitle}</p>
						<div><a href className="btn btn-xs white">Read More</a></div>
					</div>
				</div>
			</div>
		);
	}
};