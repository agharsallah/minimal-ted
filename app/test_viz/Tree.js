//all is the json from Geojson file which contains all info about mun
import React, { Component } from 'react';
import "./scss/styles/treemap.scss";
import {Treemap} from 'react-vis';
import Infos from './Infos'
class Tree extends Component {
  constructor (props, context) {
      super(props, context)
      this.state = {munname:"Click on a municipality",size:""}
    this.handlehover = this.handlehover.bind(this);
  }

  handlehover(leafNode, domEvent){

  this.setState({munname:leafNode.data.title,size:leafNode.data.size});
  }

    render () {
        let array = all.features;        
        let child = []
        let obj = {};
        obj.children=child;
        let datatoshow = this.props.datatoshow
        for (var i = 0; i < array.length ; i++) {
          obj.children[i]={title:array[i].properties.name_en,size:array[i].properties[datatoshow]}
        }

      return (
         <div>
           <div className="col-md-9" style={{marginLeft:"30px"}}>
           <Treemap
              title={'My New Treemap'}
              width={1000}
              height={600} animation={true}
              data={obj}
              padding = {3}
              onLeafClick ={this.handlehover}
            />
            </div>
                <Infos munname={this.state.munname} size={this.state.size} datatoshow={datatoshow}/>
          
         </div>
      );


  }

}
export default Tree
