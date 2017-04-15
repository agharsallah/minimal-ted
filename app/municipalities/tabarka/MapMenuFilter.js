import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class MapMenuFilter extends Component {
    constructor(props) {
            super(props);
            this.state={value:'all'};
    }
 
    handleChange (event, index, value) {this.props.getclickedbutton(value);this.setState({value})}
    
    render() {
        return (
            <div>
                <DropDownMenu style={{width:"80%",marginLeft:"0"}} value={this.state.value} onChange={this.handleChange.bind(this)} autoWidth={false} >
                    <MenuItem value={"all"} primaryText="all" />
                    <MenuItem value={"municipal"} primaryText="services" />
                    <MenuItem value={"party"} primaryText="parties" />
                </DropDownMenu>  
            </div>
        );
    }
}

export default MapMenuFilter;