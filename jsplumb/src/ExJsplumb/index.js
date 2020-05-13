import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';

export default class ExJsplumb extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
    jsplumb.jsPlumb.ready(function () {
      var els = document.querySelectorAll(".wrapper");

      var common = {
        isSource: true,
        isTarget: true,
        connector: "Straight",
        endpoint: "Rectangle",
        paintStyle: { fill: "white", outlineStroke: "blue", strokeWidth: 3 },
        hoverPaintStyle: { outlineStroke: "lightblue" },
        connectorStyle: { outlineStroke: "green", strokeWidth: 1 },
        connectorHoverStyle: { strokeWidth: 2 },
      };
      jsplumb.jsPlumb.draggable("item_left");
      jsplumb.jsPlumb.addEndpoint("item_left", {
        anchors: ["Right"]
      }, common);
      jsplumb.jsPlumb.addEndpoint("item_right", {
        anchors: ["Right"]
      }, common);
      jsplumb.jsPlumb.draggable(els);
    });
  }

  render() {
    return (
      <div id="diagramContainer">
          <div id="item_left" className="item"></div>
          <div id="item_right" className="item" style={{ marginLeft: "50px" }}></div>
        
      </div>
    );
  }
}


