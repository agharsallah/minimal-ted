import React, { Component } from 'react';
import ShapesMap from'./ShapesMap';
import level0 from "./data/level0"
import level1 from "./data/level1"
import level2 from "./data/level2"
class MapEvolution extends Component {
    constructor(props){
		super(props);
		this.state={shape:level0,count:3}
        this.changeshape = this.changeshape.bind(this);
	}
    componentDidMount() {

                    console.log("done")

      setInterval(
      () => this.changeshape(),
      2500
    );

        
  }
    componentDidUpdate() {
        console.log(this.state.count)
        if (this.state.count==6) {
            this.setState({shape:level0,count:3});
        }

    }
    changeshape(){ 
      var count= this.state.count
        if (count%3==0) {
           this.setState({shape:level1});
        }else{
           this.setState({shape:level2});
        } 
        var newc =count;
        newc++;

        this.setState({count:newc});
    }

    render() {
        return (
            <div>
              <ShapesMap shape={this.state.shape}/>
            </div>
        );
    }
}

export default MapEvolution;