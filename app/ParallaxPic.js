import React, { Component } from 'react';
import Translate from 'react-translate-component';

const ParallaxPic = (props)=>{
  const classname = 'parallax fixed ' + props.classname;
  const header = props.header;
  const subheader = props.subheader;
  const url = props.url;
  const height = props.height;
  const color = props.color;
  return(
  	/*background image check css file. each time diffrent class ==> image and config included */
  	<div id="parallax-1" className={classname} style ={{  height,backgroundColor:"rgb(223, 222, 227)" }} >
                  <div className="quoteWrap">
                    <div className="quote">
                              <div className="containerp">
                                    <div className="sixteen columns">
                                        <h1 className="hometitle" style ={{color:"#212121"}} > <Translate content={header} />		</h1>
                                          <br/><span className="mediumPar" style ={{color:"#212121"}}><Translate content={subheader} />	</span>
                                    </div>
                                </div>  
                    </div>
                  </div>
    </div>
  );

}
ParallaxPic.defaultProps = {
    height:'500px'
};
export default ParallaxPic