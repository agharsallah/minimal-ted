import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ButtonFilter extends Component {
      constructor(props) {
        super(props);
        this.state={timelinecondition:'all'};
  }
    ChangeTimelineCondition(event,val){
        this.props.getclickedbutton(event)
        console.log(event)
    }

    
    render() {
        return (
            <div>
                <RaisedButton label="whole timeline"  buttonStyle={{width:"200px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"all")} />
                <br/>
                <RaisedButton label="Conditions" primary={true}  buttonStyle={{width:"200px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Conditions")} />
                <br/>
                <RaisedButton label="Registration" secondary={true}  buttonStyle={{width:"200px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Registration")} />
            </div>
        );
    }
}

export default ButtonFilter;