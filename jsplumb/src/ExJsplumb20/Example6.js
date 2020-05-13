import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example6 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
      let jsPlumbInstance =  jsplumb.jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:6, 
            stroke:"#567567", 
            outlineStroke:"black", 
            outlineWidth:1 
          },
          Connector:[ "Bezier", { curviness: 30 } ],
          Endpoint:[ "Dot", { radius:5 } ],
          EndpointStyle : { fill: "#567567"  },
          Anchor : [ 0.5, 0.5, 1, 1 ]
      });
   
   
      let e0 =  jsPlumbInstance.addEndpoint("item_left");
      let e1 =  jsPlumbInstance.addEndpoint("item_right");

      jsPlumbInstance.connect({
        source:e0,
        target:e1,
        connector:["Flowchart",{curviness:1,stub:60},{cssClass:"connectorClass"}],
       
    });
      
    jsPlumbInstance.draggable($(".item"));
  
    
  }







  render() {
    return (
      <>
           <div id="diagramContainer">
          <div id="item_left" className="item"></div>
          <div id="item_right" className="item" style={{ marginLeft: "50px" }}></div>
        
      </div>

      </>
    );
  }
}


