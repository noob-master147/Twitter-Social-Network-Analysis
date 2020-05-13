import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example3 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
    var firstInstance = jsplumb.jsPlumb.getInstance();
    firstInstance.importDefaults({
      Connector : [ "Bezier", { curviness: 150 } ],
      Anchors : [ "TopCenter", "BottomCenter" ]
    });

    firstInstance.connect({
      source:"item_left", 
      target:"item_right", 
      
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


