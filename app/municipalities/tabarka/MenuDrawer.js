import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class MenuDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }
    handleToggle() {this.setState({open: !this.state.open})}

    render() {
        return (
            <div>
                <RaisedButton
                label="Open Filter"
                onTouchTap={this.handleToggle.bind(this)}
                />
                <Drawer width={300}  open={this.state.open}  onRequestChange={(open) => this.setState({open})}>
                <AppBar title="Menu" onLeftIconButtonTouchTap = { this.handleToggle.bind(this) }/>
                </Drawer>
            </div>
        );
    }
}

export default MenuDrawer;