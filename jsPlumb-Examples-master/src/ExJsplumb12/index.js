import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb12 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    jsplumb.jsPlumb.ready(function() {
      var instance = jsplumb.jsPlumb.getInstance({
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        PaintStyle: { stroke: "#666" },
        EndpointHoverStyle: { fill: "orange" },
        HoverPaintStyle: { stroke: "orange" },
        EndpointStyle: { width: 20, height: 16, stroke: "#666" },
        Endpoint: "Rectangle",
        Anchors: ["TopCenter", "TopCenter"],
        Container: "canvas"
      });
      // suspend drawing and initialise.
      instance.batch(function() {
       instance.bind("click", function(component, originalEvent) {
          alert("click!");
        });
        // configure some drop options for use by all endpoints.
        var exampleDropOptions = {
          tolerance: "touch",
          hoverClass: "dropHover",
          activeClass: "dragActive"
        };
        // the second example uses a Dot of radius 15 as the endpoint marker, is both a source and target,
        // and has scope 'exampleConnection2'.
        //
        var color2 = "#316b31";
        var exampleEndpoint2 = {
          endpoint: ["Dot", { radius: 11 }],
          paintStyle: { fill: color2 },
          isSource: true,
          scope: "green",
          connectorStyle: { stroke: color2, strokeWidth: 6 },
          connector: ["Bezier", { curviness: 63 }],
          maxConnections: 3,
          isTarget: true,
          dropOptions: exampleDropOptions
        };
        instance.addEndpoint(
          "dragDropWindow2",
          { anchor: "RightMiddle" },
          exampleEndpoint2
        );
        instance.addEndpoint(
          "dragDropWindow3",
          { anchor: "RightMiddle" },
          exampleEndpoint2
        );
        // make .window divs draggable
        instance.draggable(jsplumb.jsPlumb.getSelector(".drag-drop-demo .window"));
      });
      jsplumb.jsPlumb.fire("jsPlumbDemoLoaded", instance);
    });
   
  }

  render() {
    return (
      <>
      <div className="jtk-demo">
    <div className="jtk-demo-canvas canvas-wide drag-drop-demo jtk-surface jtk-surface-nopan" id="canvas">
      <div className="window" id="dragDropWindow2">two
      </div>
      <div className="window" id="dragDropWindow3">three
      </div>
    </div>
  </div>
      </>
    );
  }
}


