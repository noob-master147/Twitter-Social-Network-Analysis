import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example8 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
      let jsPlumbInstance =  jsplumb.jsPlumb.getInstance();
   
   
      let e0 =  jsPlumbInstance.addEndpoint("item_left");
      let e1 =  jsPlumbInstance.addEndpoint("item_right",{
        endpoint:[ "Dot", { radius:5 } ],
        anchor : ["Perimeter",{shape:"Circle"} ]
      });

      jsPlumbInstance.connect({
        source:e0,
        target:e1,
        connector:["Flowchart",{curviness:1,stub:60},{cssClass:"connectorClass"}],
       
    });
      
    jsPlumbInstance.draggable("item_left",{
        constrain:true
    });
  
    
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


