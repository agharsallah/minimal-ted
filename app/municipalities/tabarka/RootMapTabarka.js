import React, { Component } from 'react';
import MenuDrawer from './MenuDrawer';
import TabarkaMap from "./TabarkaMap"
class RootMapTabarka extends Component {
    render() {
        return (
            <div>
                <TabarkaMap/>
                <MenuDrawer/>
            </div>
        );
    }
}

export default RootMapTabarka;