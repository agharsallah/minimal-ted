import React, { Component } from 'react';
import {Link} from 'react-router';
import Layout from './../Layout';

class Split extends Component {
    render() {
        return (
            <div style={{overflow:"hidden !important"}}>
                <Layout/>
                <div className="leftscreen">
                    <div className='leftCCon ts'>
                        <Link to="/Municipalities/all"><h1 style={{textAlign:"center"}}>Administrative Structure</h1></Link>
                        <div className='bborder'></div>
                        <Link to="/Municipalities/all"> 
                            <img className="splitimage" src="./img/split_administrative.png" width="260px"/> 
                        </Link>
                    </div>
                </div>

                <div className="rightscreen">
                        <div className='leftCCon ts'>
                            <Link to="/Municipalities"><h1 style={{textAlign:"center"}}>Dive into municipalities </h1></Link>
                            <div className='bborder'></div>
                        <Link to="/Municipalities"> 
                            <img className="splitimage" src="./img/split_municipalities.png" width="260"/> 
                        </Link>
                        </div>
                </div>
            </div>
        );
    }
}

export default Split;