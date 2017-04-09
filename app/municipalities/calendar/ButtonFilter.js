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
                <RaisedButton label="whole timeline" style={{marginBottom:"15px"}}  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"all")} />
                <br/>
                
                <RaisedButton label="Conditions" style={{marginBottom:"15px"}} backgroundColor="#12A5F4"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Conditions")} />
                <br/>
                
                <RaisedButton label="Registration" style={{marginBottom:"15px"}} backgroundColor="#cb2027"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Registration")} />
                <br/>
                
                <RaisedButton label="Candidature Acceptance" style={{marginBottom:"15px"}} backgroundColor="#3b5998"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Candidature Acceptance")} />
                <br/>
                
                <RaisedButton label="Electoral Campaign" style={{marginBottom:"15px"}} backgroundColor="#d34836"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Electoral Campaign")} />
                <br/>
                
                <RaisedButton label="Election" style={{marginBottom:"15px"}} backgroundColor="#f80"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Election")} />
                <br/>
                
                <RaisedButton label="Primary Results" style={{marginBottom:"15px"}} backgroundColor="#7ab800"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Primary Results")} />
                <br/>
                
                <RaisedButton label="Final Results" style={{marginBottom:"15px"}} backgroundColor="#35465c"  buttonStyle={{width:"220px"}} onTouchTap={this.ChangeTimelineCondition.bind(this,"Final Results")} />
            </div>
        );
    }
}

export default ButtonFilter;