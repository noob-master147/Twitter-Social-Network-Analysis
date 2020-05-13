import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb7 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    jsplumb.jsPlumb.ready(function() {
      var color = "gray";
      var instance = jsplumb.jsPlumb.getInstance({
        // notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
        // than the curves on the first demo, which use the default curviness value.
        Connector: ["Bezier", { curviness: 50 }],
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        PaintStyle: { stroke: color, strokeWidth: 2 },
        EndpointStyle: { radius: 9, fill: color },
        HoverPaintStyle: { stroke: "#ec9f2e" },
        EndpointHoverStyle: { fill: "#ec9f2e" },
        Container: "canvas"
      });
      // suspend drawing and initialise.
      instance.batch(function() {
        // declare some common values:
        var arrowCommon = { foldback: 0.7, fill: color, width: 14 },
          // use three-arg spec to create two different arrows with the common values:
          overlays = [
            ["Arrow", { location: 0.7 }, arrowCommon],
            ["Arrow", { location: 0.3, direction: -1 }, arrowCommon]
          ];
        // add endpoints, giving them a UUID.
        // you DO NOT NEED to use this method. You can use your library's selector method.
        // the jsPlumb demos use it so that the code can be shared between all three libraries.
        var windows = jsplumb.jsPlumb.getSelector(".chart-demo .window");
        for (var i = 0; i < windows.length; i++) {
          instance.addEndpoint(windows[i], {
            uuid: windows[i].getAttribute("id") + "-bottom",
            anchor: "Bottom",
            maxConnections: -1
          });
          instance.addEndpoint(windows[i], {
            uuid: windows[i].getAttribute("id") + "-top",
            anchor: "Top",
            maxConnections: -1
          });
        }
        instance.connect({
          uuids: ["chartWindow3-bottom", "chartWindow6-top"],
          overlays: overlays,
          detachable: true,
          reattach: true
        });
        instance.connect({
          uuids: ["chartWindow1-bottom", "chartWindow2-top"],
          overlays: overlays
        });
        instance.connect({
          uuids: ["chartWindow1-bottom", "chartWindow3-top"],
          overlays: overlays
        });
        instance.connect({
          uuids: ["chartWindow2-bottom", "chartWindow4-top"],
          overlays: overlays
        });
        instance.connect({
          uuids: ["chartWindow2-bottom", "chartWindow5-top"],
          overlays: overlays
        });
        instance.draggable(windows);
      });
      jsplumb.jsPlumb.fire("jsPlumbDemoLoaded", instance);
    });
     
  }

  render() {
    return (
      <>
        <div className="jtk-demo">
    <div className="jtk-demo-canvas canvas-wide chart-demo jtk-surface jtk-surface-nopan" id="canvas">
      <div className="window" id="chartWindow1">window one</div>
      <div className="window" id="chartWindow2">window two</div>
      <div className="window" id="chartWindow3">window three</div>
      <div className="window" id="chartWindow4">window four</div>
      <div className="window" id="chartWindow5">window five</div>
      <div className="window" id="chartWindow6">window six</div>
    </div>
  </div>
      </>
    );
  }
}


