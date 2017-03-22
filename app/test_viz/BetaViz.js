import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import Layout from '../Layout';
class BetaViz extends Component {
    render() {
        return (
            <div>
            <Layout/>    
                 <ul >
		        <li><IndexLink to={'/betaViz/tree'} activeClassName="activeN">tree chart</IndexLink></li>
		        <li><IndexLink to={'/betaViz/facebook'} activeClassName="activeN">facebook accounts in tunisia</IndexLink></li>
                </ul>
            </div>
        );
    }
}

export default BetaViz;