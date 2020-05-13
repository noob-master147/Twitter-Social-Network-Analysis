import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example2 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
   
    jsplumb.jsPlumb.ready(function () {
      var e0 =  jsplumb.jsPlumb.addEndpoint("item_left");
      var e1 =  jsplumb.jsPlumb.addEndpoint("item_right");

      jsplumb.jsPlumb.connect({
        source:e0,
        target:e1,
       // connector:["Flowchart",{curviness:1,stub:60},{cssClass:"connectorClass"}],
       
    });
      
  
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


