import React, { Component } from 'react';
import Layout from '../../Layout'
import ButtonFilter from "./ButtonFilter"
import Timeline from "./Timeline"

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
                <section className="section-block replicable-content bkg-grey-ultralight">
					<div className="row">
						<div className="column width-12">
							<h2 className="mb-80">Official Elections<br/>Calendar</h2>
						</div>
                        <div className="col-md-12">
                        <div className="col-md-4"><ButtonFilter getclickedbutton={this.getclickedbutton}/></div>
                            <div className="col-md-8">
                                <Timeline buttonclicked={this.state.buttonclicked}/>
                            </div>
                        </div>
                    </div>
				</section>
            </div>
        );
    }
}

export default CalendarRoot;