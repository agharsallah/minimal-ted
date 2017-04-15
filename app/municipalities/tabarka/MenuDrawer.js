import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MapMenuFilter from "./MapMenuFilter"
class MenuDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }
    handleToggle() {this.setState({open: !this.state.open})}
    getclickedbutton(val) {
        this.props.getclickedbuttons(val)
    }
    render() {
        return (
            <div>
                <RaisedButton
                label="Open Filter"
                onTouchTap={this.handleToggle.bind(this)}
                />
                <Drawer width={300}  open={this.state.open}  onRequestChange={(open) => this.setState({open})}>
                <AppBar title="Menu" onLeftIconButtonTouchTap = { this.handleToggle.bind(this) }/>
                <div className="mb-30">&nbsp;</div>
                <div style={{marginLeft:"2rem"}}>
                     <h3 className="widget-title"  >Filter by Marker</h3>
                </div>
                <MapMenuFilter getclickedbutton={this.getclickedbutton.bind(this)}/>
                </Drawer>
            </div>
        );
    }
}

export default MenuDrawer;