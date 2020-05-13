import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb13 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    jsplumb.jsPlumb.ready(function() {
      var instance = (window.jsp = jsplumb.jsPlumb.getInstance({
        // default drag options
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        // overlays
        ConnectionOverlays: [
          [
            "Arrow",
            {
              location: 1,
              visible: true,
              width: 11,
              length: 11,
              id: "ARROW",
              events: {
                click: function() {
                  alert("you clicked on the arrow overlay");
                }
              }
            }
          ],
          [
            "Label",
            {
              location: 0.1,
              id: "label",
              cssClass: "aLabel",
              events: {
                tap: function() {
                  alert("hey");
                }
              }
            }
          ]
        ],
        Container: "canvas"
      }));
      // this is the paint style for the connecting lines..
      var connectorPaintStyle = {
          strokeWidth: 2,
          stroke: "#61B7CF",
          joinstyle: "round",
          outlineStroke: "white",
          outlineWidth: 2
        },
        // .. and this is the hover style.
        connectorHoverStyle = {
          strokeWidth: 3,
          stroke: "#216477",
          outlineWidth: 5,
          outlineStroke: "white"
        },
        endpointHoverStyle = {
          fill: "#216477",
          stroke: "#216477"
        },
        // the definition of source endpoints (the small blue ones)
        sourceEndpoint = {
          endpoint: "Dot",
          paintStyle: {
            stroke: "#7AB02C",
            fill: "transparent",
            radius: 7,
            strokeWidth: 1
          },
          isSource: true,
          /* connector: [
            "Flowchart",
            {
              stub: [40, 60],
              gap: 10,
              cornerRadius: 5,
              alwaysRespectStubs: true
            }
          ], */
          connector: "Straight",
          connectorStyle: connectorPaintStyle,
          hoverPaintStyle: endpointHoverStyle,
          connectorHoverStyle: connectorHoverStyle,
          dragOptions: {},
          overlays: [
            [
              "Label",
              {
                location: [0.5, 1.5],
                label: "Drag",
                cssClass: "endpointSourceLabel",
                visible: false
              }
            ]
          ]
        },
        // the definition of target endpoints (will appear when the user drags a connection)
        targetEndpoint = {
          endpoint: "Dot",
          paintStyle: { fill: "#7AB02C", radius: 7 },
          hoverPaintStyle: endpointHoverStyle,
          maxConnections: -1,
          dropOptions: { hoverClass: "hover", activeClass: "active" },
          isTarget: true,
          overlays: [
            [
              "Label",
              {
                location: [0.5, -0.5],
                label: "Drop",
                cssClass: "endpointTargetLabel",
                visible: false
              }
            ]
          ]
        },
        init = function(connection) {
          console.log(connection.getOverlay("label"));
          connection
            .getOverlay("label")
            .setLabel(
              connection.sourceId.substring(15) +
                "-" +
                connection.targetId.substring(15)
            );
        };
      var _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
        console.log(toId, sourceAnchors, targetAnchors);
        for (var i = 0; i < sourceAnchors.length; i++) {
          var sourceUUID = toId + sourceAnchors[i];
          instance.addEndpoint("flowchart" + toId, sourceEndpoint, {
            // anchor: sourceAnchors[i],
            anchor: ["Perimeter", { shape: "Rectangle" }],
            uuid: sourceUUID
          });
        }
        /* for (var j = 0; j < targetAnchors.length; j++) {
          var targetUUID = toId + targetAnchors[j];
          instance.addEndpoint("flowchart" + toId, targetEndpoint, {
            anchor: targetAnchors[j],
            // anchor: ['Perimeter',{shape:"Rectangle"}],
            uuid: targetUUID
          });
        } */
        
        
        /* instance.makeSource(toId, {
          // filter: "a",
          // filterExclude: true,
          maxConnections: -1,
          endpoint: sourceEndpoint,
          anchor: ["Bottom"]
        });
        instance.makeTarget(toId, {
          dropOptions: { hoverClass: "hover" },
          anchor: ['Perimeter',{shape:'Rectangle'}],
          endpoint: targetEndpoint
        }); */
      };
      // suspend drawing and initialise.
      instance.batch(function() {
        /* _addEndpoints(
          "Window2",
          ["RightMiddle", "BottomCenter"],
          ["LeftMiddle", "TopCenter"]
        );
        _addEndpoints(
          "Window1",
          ["LeftMiddle", "RightMiddle"],
          ["TopCenter", "BottomCenter"]
        ); */
        jsplumb.jsPlumb.makeSource($("#Window1"), {
          anchor: "Continuous",
          isSource: true,
          endpoint: ["Rectangle", { width: 40, height: 20 }],
          maxConnections: 3
        });
        /* jsPlumb.makeTarget($("#Window2"), {
          isTarget: true
        }); */
        // listen for new connections; initialise them the same way we initialise the connections at startup.
        instance.bind("connection", function(connInfo, originalEvent) {
          init(connInfo.connection);
        });
        // make all the window divs draggable
        instance.draggable(jsplumb.jsPlumb.getSelector(".flowchart-demo .window"), {
          grid: [20, 20]
        });
        // THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector
        // method, or document.querySelectorAll:
        //jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });
        // connect a few up
        /* instance.connect({
          uuids: ["Window2BottomCenter", "Window1BottomCenter"],
          editable: true
        }); */
        //
        //
        // listen for clicks on connections, and offer to delete connections on click.
        //
        instance.bind("click", function(conn, originalEvent) {
          // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
          //   instance.detach(conn);
          // conn.toggleType("basic");
        });
        instance.bind("connectionDrag", function(connection) {
          console.log(
            "connection " +
              connection.id +
              " is being dragged. suspendedElement is ",
            connection.suspendedElement,
            " of type ",
            connection.suspendedElementType
          );
        });
        instance.bind("connectionDragStop", function(connection) {
          console.log("connection " + connection.id + " was dragged");
        });
        instance.bind("connectionMoved", function(params) {
          console.log("connection " + params.connection.id + " was moved");
        });
      });
      jsplumb.jsPlumb.fire("jsPlumbDemoLoaded", instance);
    });
     
  }

  render() {
    return (
      <>
    <div className="jtk-demo">
    <div className="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan" id="canvas">
      <div className="window jtk-node" id="flowchartWindow1">
        <strong>1</strong><br/><br/></div>
      <div className="window jtk-node" id="flowchartWindow2">
        <strong>2</strong><br/><br/></div>
    </div>
  </div>
      </>
    );
  }
}


