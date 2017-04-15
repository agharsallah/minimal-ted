import React, { Component } from 'react';
import MenuDrawer from './MenuDrawer';
import TabarkaMap from "./TabarkaMap"
class RootMapTabarka extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonclicked:"all"};
    }
    getclickedbuttons(val) {
        this.setState({buttonclicked:val});
    }
    render() {
        console.log(this.state.buttonclicked)
        return (
            <div>
                <TabarkaMap selectedMarker={this.state.buttonclicked}/>
                <MenuDrawer getclickedbuttons={this.getclickedbuttons.bind(this)}/>
            </div>
        );
    }
}

export default RootMapTabarka;