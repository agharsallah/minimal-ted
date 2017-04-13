import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class MenuFilter extends Component {
      constructor(props) {
        super(props);
        this.state={value:'all'};
  }

    handleChange (event, index, value) {this.props.getclickedbutton(value);this.setState({value})}
    
    render() {
        return (
         <DropDownMenu style={{width:"80%",marginLeft:"0"}} value={this.state.value} onChange={this.handleChange.bind(this)} autoWidth={false} >
          <MenuItem value={"all"} primaryText="whole timeline" />
          <MenuItem value={"Conditions"} primaryText="Conditions" />
          <MenuItem value={"Registration"} primaryText="Registration" />
          <MenuItem value={"Candidature Acceptance"} primaryText="Candidature Acceptance" />
          <MenuItem value={"Electoral Campaign"} primaryText="Electoral Campaign" />
          <MenuItem value={"Election"} primaryText="Election" />
          <MenuItem value={"Primary Results"} primaryText="Primary Results" />

        </DropDownMenu>
              
        );
    }
}

export default MenuFilter;