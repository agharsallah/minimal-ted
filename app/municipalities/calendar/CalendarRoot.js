import React, { Component } from 'react';
import Layout from '../../Layout'
import MenuFilter from "./MenuFilter"
import Timeline from "./Timeline"
import DateFilter from "./DateFilter"
import Paper from 'material-ui/Paper';

class CalendarRoot extends Component {
    constructor(props) {
        super(props);
        this.state={buttonclicked:'all'};
         this.getclickedbutton = this.getclickedbutton.bind(this);
    }
    getclickedbutton(val) {
        this.setState({buttonclicked:val});
/*        console.log(this.state.buttonclicked)
        console.log(val)*/
    }
    
    render() {
        return (
            <div>
            <Layout/>
                <section className="section-block bkg-grey-ultralight">
						<div className="col-md-12">
                            <div className="col-md-1"></div>
                            
                            <div className="col-md-3"><h2 className="mb-30">Official Elections<br/>Calendar</h2></div>
                            
                            <div className="col-md-7"><h3 className="mb-30" style={{textAlign: "center"}}><br/>{this.state.buttonclicked=="all"?"Whole Timeline":this.state.buttonclicked}</h3></div>
						 
                            <div className="col-md-1"></div>
                        </div>
                        
                        <div className="col-md-12">
                        	<div className="col-md-1"></div>
                            
                            <div className="col-md-3">
                                <Paper style={{width:"100% !important"}}>
                                    <div className="mb-30">&nbsp;</div>
                                    <div style={{marginLeft:"2rem"}}>
                                        <h3 className="widget-title"  >Filter by subject</h3>
                                    </div>
                                    <MenuFilter getclickedbutton={this.getclickedbutton} />
                                </Paper>
                            </div>
                            
                            <div className="col-md-7">
                                <Paper style={{width:"100% !important"}}>
                                    <Timeline  buttonclicked={this.state.buttonclicked}/>
                                </Paper>
                            </div>
                            
                            <div className="col-md-1"></div>
                    </div>
				</section>
            </div>
        );
    }
}

export default CalendarRoot;