import React, { Component } from 'react';
import ShapesMap from'./ShapesMap';
import level0 from "./data/level0"
import level1 from "../../municipalities/data/gouvernorates_shape"
import level2 from "./data/level2"
import level3 from "../../municipalities/data/municipalities_shape";
import Layout from '../../Layout';

class MapEvolution extends Component {
    constructor(props){
		super(props);
		this.state={shape:level0,count:3,color:'white',text:'Tunisia map'}
        this.changeshape = this.changeshape.bind(this);
	}
    componentDidMount() {

      setInterval(
      () => this.changeshape(),
      2750
    );

  }
/*    componentDidUpdate() {
        console.log(this.state.count)
        if (this.state.count==7) {
            this.setState({shape:level0,count:3,color:'white',text:'Tunisia map'});
        }

    }*/
    changeshape(){ 
      var count= this.state.count
        if (count==3) {
           this.setState({shape:level1,color:'#274796',text:'Gouvernorate Level'});
        }else  if (count==4){
           this.setState({shape:level2,color:'#7BCAE2',text:'Delegation Level'});
           console.log("levl 2")
        }else{
            this.setState({shape:level3,color:'#F5942F',text:'Municipality Level'});
           console.log("levl 3")
        } 
        var newc =count;
        newc++;
        this.setState({count:newc});
    }

    render() {
        return (
            <div>
            <Layout/>
            <div className="col-md-2"></div>
            <div className="col-md-5" style={{marginTop:"25px"}}>
              <ShapesMap shape={this.state.shape} color={this.state.color}/>            
            </div>
            <div className="col-md-5" style={{marginTop:"250px"}}>
            <h1>{this.state.text}</h1>
            </div>
            </div>
        );
    }
}

export default MapEvolution;