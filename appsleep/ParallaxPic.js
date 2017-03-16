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
  	<div id="parallax-1" className={classname} style ={{  backgroundImage:url,height }} >
                  <div className="quoteWrap">
                    <div className="quote">
                              <div className="containerp">
                                    <div className="sixteen columns">
                                        <span className="largePar"> <Translate content={header} />		</span>
                                          <br/><span className="mediumPar"><Translate content={subheader} />	</span>
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