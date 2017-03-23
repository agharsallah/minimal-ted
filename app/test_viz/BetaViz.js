import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import Layout from '../Layout';
class BetaViz extends Component {
    render() {
        return (
            <div>
            <Layout/>    
                 <ul >
		        <li><IndexLink to={'/betaViz/tree'} activeClassName="activeN">Tree chart</IndexLink></li>
		        <li><IndexLink to={'/municipalities/all'} activeClassName="activeN">All municipalities</IndexLink></li>
		        <li><IndexLink to={'/betaViz/mapevolution'} activeClassName="activeN">Shapes evolution</IndexLink></li>
                </ul>
            </div>
        );
    }
}

export default BetaViz;