import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Widget extends Component{
	
	render(){
		const imageopacity = this.props.imageopacity;
		console.log(imageopacity)
		const imgsrc = 'img/' +this.props.imgsrc;
		/*get the map id*/

		const linkk = this.props.link+ this.props.imgsrc.match(/.+?(?=\.)/g);
		//console.log(linkk)
		
		//get the color of the electype tag
		var color="info1"
		if (this.props.elecType == "Presidential") {color="info2"}else if(this.props.elecType == "Parlamentary"){color="info3"}
		const clasnam ="pull-left text-u-c label label-md "+color
		/*get the direction style as prop whether r-t-l or l-t-r*/
		return(
			<div className="col-xs-6 col-sm-12 col-md-4 col-0">
				<div className="box">
					<div className="item">
						<div className="item-overlay active p-a">
							<span className="pull-right label dark-white text-color"><i className="fa fa-envelope-open fa-fw"></i> {this.props.elecYear}</span>
							<a  className={clasnam}>{this.props.elecType}</a>
						</div>
						<Link to={linkk}><img src={imgsrc} className="w-full" style={{opacity:imageopacity}}/></Link>	
					</div>
					<div className="left p-a">
						<div className="m-b h-2x"><Link href className="_800" to={linkk}>{this.props.title}</Link></div>
						<p className="h-3x">{this.props.subtitle}</p>
					<Link className="btn btn-xs white" to={linkk}>Read More</Link>
					</div>
				</div>
			</div>
		);
	}
};