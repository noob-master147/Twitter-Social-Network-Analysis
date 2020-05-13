import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class ExJsplumb18 extends Component {
  constructor() {
    super();
    this.state = {
        graphData:
        {
            "name": "Analyzing Load",
            "description": "Radio 3G Analysis",
            "nodes":
            [
                { "id": "1", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "RRC Drop Call", "calculation": "RRC_CONN_REJECT", "row": "1", "col": "1" },
                { "id": "2", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "RRC Connection Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "2" },
                { "id": "3", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "Radio Bearer Setup Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "3" },
                { "id": "4", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "RRC Connection Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "4" },
                { "id": "5", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "Radio Bearer Setup Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "5" },
                { "id": "6", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "AVG Radio Link/Sector", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "6" },
                { "id": "7", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "RRC Drop Call", "calculation": "RRC_CONN_REJECT", "row": "1", "col": "7" },
                { "id": "8", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "RRC Connection Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "8" },
                { "id": "9", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "Radio Bearer Setup Failures", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "10" },
                { "id": "10", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "AVG Radio Link / Sector", "calculation": "RRC_CONN_SETUP", "row": "1", "col": "11" },
                { "id": "11", "type": "switch", "neType": "FddCell", "name": "Combined KPIs - Issue 1", "logic": "AND", "row": "3", "col": "2" },
                { "id": "12", "type": "switch", "neType": "FddCell", "name": "Combined KPIs - Issue 2", "logic": "AND", "row": "3", "col": "5" },
                { "id": "13", "type": "switch", "neType": "FddCell", "name": "Combined KPIs - Issue 3", "logic": "AND", "row": "3", "col": "9" },
                { "id": "14", "type": "comment", "name": "Note 1", "text": "This result is the combination of high values of: Call Drop, RB Setup failures and RRC Connection failures.", "row": "4", "col": "2" },
                { "id": "15", "type": "comment", "name": "Note 2", "text": "This result is the combination of high values of RB Setup failures and AVG Radio Link/Sector and normal values of RRC Connection Failures. Need Cell Planning Investigation. Probably need to tilt the antenna to reduce the cell coverage.", "row": "4", "col": "5" },
                { "id": "16", "type": "comment", "name": "Note 3", "text": "This result is the combination of high values of Call Drop and normal values of RB Setup failures, AVG Radio Link/Sector and RRC Connection Failures.", "row": "4", "col": "10" },
                { "id": "17", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "DL Ec/I0", "calculation": "RRC_CONN_SETUP", "row": "5", "col": "2" },
                { "id": "18", "type": "comment", "name": "Note 4", "text": "Check for coverage overlap between the cells. Need cell planning investigation.", "row": "6", "col": "2" },
                { "id": "19", "type": "metric", "neType": "FddCell", "timeGran": "60", "name": "Outgoing SHO", "calculation": "RRC_CONN_SETUP", "row": "5", "col": "9" },
                { "id": "20", "type": "comment", "name": "Note 5", "text": "Seems to have an issue in neighbouring definition. Please investigate further in this direction.", "row": "6", "col": "9" }
            ],
            "links":
            [
              // Id to id, they are not necessarily linear. There is an implicit node of id "0", starting point of the graph.
                { "parent": "0", "child": "1" },
                { "parent": "0", "child": "2" },
                { "parent": "0", "child": "3" },
                { "parent": "0", "child": "4" },
                { "parent": "0", "child": "5" },
                { "parent": "0", "child": "6" },
                { "parent": "0", "child": "7" },
                { "parent": "0", "child": "8" },
                { "parent": "0", "child": "9" },
                { "parent": "0", "child": "10" },
                { "parent": "0", "child": "1" },
                { "parent": "1", "child": "11" },
                { "parent": "2", "child": "11" },
                { "parent": "3", "child": "11" },
                { "parent": "4", "child": "12" },
                { "parent": "5", "child": "12" },
                { "parent": "6", "child": "12" },
                { "parent": "7", "child": "13" },
                { "parent": "8", "child": "13" },
                { "parent": "9", "child": "13" },
                { "parent": "10", "child": "13" },
                { "parent": "11", "child": "14" },
                { "parent": "12", "child": "15" },
                { "parent": "13", "child": "16" },
                { "parent": "14", "child": "17" },
                { "parent": "17", "child": "18" },
                { "parent": "13", "child": "19" },
                { "parent": "19", "child": "20" }
            ]
        }
        
    };
  }
  componentDidMount() {
    function getWindowId(index)
    {
        return "n" + index;
    }
    function createWindow(node, index)
    {
        var offset = 20, scaleX = 180, scaleY = 150;
    
        var window = document.createElement("div");
        window.id = getWindowId(node.id);
        window.className = "window";
        var windowLabel = document.createElement("div");
        windowLabel.className = "label";
        if (node.type === "comment")
        {
            window.className += " comment";
            window.innerHTML = node.text;
            windowLabel.innerHTML = node.name;
        }
        else if (node.type === "switch")
        {
            window.className += " switch";
            window.innerHTML = node.logic;
            windowLabel.innerHTML = node.name;
        }
        else if (node.type === "metric")
        {
            window.className += " shadow";
            window.innerHTML = node.name;
            windowLabel.innerHTML = node.name + "<br>" + node.neType + "<br>" + node.calculation + " / " + node.timeGran;
        }
        else
        {
            window.className += " root";
          window.innerHTML = node.name;
        }
        if (node.type !== "root")
        {
          window.appendChild(windowLabel);
        }
    
        container.appendChild(window);
        var position = _.find(positions, "node", node.id * 1);
        if (position !== undefined)
        {
            window.style.top = (offset + position.top * scaleY) + "px";
            window.style.left = (offset + position.left * scaleX +
                // Compensate for different sizes
                (node.type === "switch" ? -5 : 0) +
                (node.type === "comment" ? -40 : 0)) +
                "px";
        }
    }
    
    var container = document.getElementById("dss-visualization");
    var root = { "id": "0", "type": "root", name: "Root", row: "0", col: "0" };
    if (this.state.graphData.nodes[0].id !== "0")
    {
        this.state.graphData.nodes.splice(0, 0, root);
    }
    var positions = buildPositions(this.state.graphData.nodes);
    _.each(this.state.graphData.nodes, createWindow);


    function buildPositions(graphDataNodes)
    {
        var minMax = _.reduce(graphDataNodes, function (mm, node)
        {
            if (node.row > mm.maxRow) mm.maxRow = node.row;
            if (node.row < mm.minRow) mm.minRow = node.row;
            if (node.col > mm.maxCol) mm.maxCol = node.col;
            if (node.col < mm.minCol) mm.minCol = node.col;
            return mm;
        }, { minRow: Infinity, maxRow: 0,  minCol: Infinity, maxCol: 0 });
    
    //  var rowRange = minMax.maxRow - minMax.minRow;
    //  var colRange = minMax.maxCol - minMax.minCol;
    
        var positions = _.map(graphDataNodes, function (node, index)
        {
            return {
                    node: index,
                    left: node.col - minMax.minCol,
                    top: node.row - minMax.minRow
            };
        });
        positions.splice(0, 0, { node: 0, top: 0, left: 0 });
    
        return positions;
    }
    
    let graphData1 = this.state.graphData;
    jsplumb.jsPlumb.ready(function ()
    {
        var instance = jsplumb.jsPlumb.getInstance(
        {
            // Where to draw (id of the container)
            Container: "dss-visualization",
            // Default drag options
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            // The overlays to decorate each connection with.
            ConnectionOverlays:
            [
                [ "Arrow", { location: 1 } ]
            ]
        });
        manageZoom(instance, document.getElementById("main"), document.getElementById("dss-visualization"));
    
        var
            // Paint style for the connecting lines..
            connectorPaintStyle =
            {
                lineWidth: 4,
                strokeStyle: "#61B7CF",
                joinstyle: "round",
                outlineWidth: 2,
                outlineColor: "white"
            },
            // Corresponding hover style.
            connectorHoverStyle =
            {
                lineWidth: 4,
                strokeStyle: "#216477",
                outlineWidth: 2,
                outlineColor: "white"
            },
            endpointHoverStyle =
            {
                fillStyle: "#216477",
                strokeStyle: "#216477"
            },
            // Definition of source endpoints (the small blue ones)
            sourceEndpoint =
            {
                endpoint: "Dot",
                isSource: true,
                maxConnections: -1,
                paintStyle:
                {
                    strokeStyle: "#7AB02C",
                    fillStyle: "transparent",
                    radius: 5,
                    lineWidth: 1
                },
                connector: [ "Flowchart", { stub: [ 10, 10 ], gap: 5, cornerRadius: 5 } ],
                connectorStyle: connectorPaintStyle,
                hoverPaintStyle: endpointHoverStyle,
                connectorHoverStyle: connectorHoverStyle,
                dragOptions: {},
                overlays: []
            },
            // Definition of target endpoints (will appear when the user drags a connection)
            targetEndpoint =
            {
                endpoint: "Dot",
                maxConnections: -1,
                paintStyle: { fillStyle: "#7AB02C", radius: 5 },
                hoverPaintStyle: endpointHoverStyle,
                dropOptions: { hoverClass: "hover", activeClass: "active" },
                isTarget: true,
                overlays: []
            };
    
        // Suspend drawing and initialise.
        instance.batch(function ()
        {
            // Add endpoints
            //let graphData1 = this.state.graphData;
            _.each(graphData1.nodes, function (node, index)
            {
                var hasIncoming, hasOutgoing, id;
                hasIncoming = _.any(graphData1.links, "child", node.id);
                hasOutgoing = _.any(graphData1.links, "parent", node.id);
                id = getWindowId(node.id);
                if (hasIncoming)
                {
                    instance.addEndpoint(id, targetEndpoint, { anchor: "TopCenter", uuid: id + "-TopCenter" });
                }
                if (hasOutgoing)
                {
                    instance.addEndpoint(id, sourceEndpoint, { anchor: "BottomCenter", uuid: id + "-BottomCenter" });
                }
            });
    
            // Make all the window divs draggable
            instance.draggable(container.getElementsByClassName("window"), { grid: [ 20, 20 ] });
    
            // Connect the nodes
            _.each(this.state.graphData.links, function (link, index)
            {
                var parentId = link.parent,
                    childId = link.child;
                var parent = _.find(this.state.graphData.nodes, "id", link.parent);
                var child = _.find(this.state.graphData.nodes, "id", link.child);
                if (parent === undefined || child === undefined)
                {
                    console.log("No connection for " + parentId + "-" + childId);
                    return; // No connection
                }
                instance.connect(
                {
                    uuids: [ getWindowId(parent.id) + "-BottomCenter", getWindowId(child.id) + "-TopCenter" ],
                    editable: false
                });
            });
        });
    
    //  jsplumb.jsPlumb.fire("jsPlumbDemoLoaded", instance);

    
    
    function manageZoom(instance, listeningArea, elementToZoom)
    {
        var minZoom = 0.2,
            maxZoom = 2.0,
            zoomStep = 0.1;
        var zoom = 1.0;
    
        // From jsPlumb documentation
        var zoomPlumb = function(zoom, instance, transformOrigin, element)
        {
            transformOrigin = transformOrigin || [ 0.5, 0.5 ];
            instance = instance || jsplumb.jsPlumb;
            element = element || instance.getContainer();
    
            var vendors = [ "webkit-", "moz-", "ms-", "o-", "" ],
                scale = "scale(" + zoom + ")",
                origin = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";
    
            vendors.map(function (v)
            {
                element.style[v + "transform"] = scale;
                element.style[v + "transform-origin"] = origin;
            });
    
            instance.setZoom(zoom);
        };
    
        $(listeningArea).bind('mousewheel DOMMouseScroll', function(event)
        {
            var delta = event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ? 1 : -1;
            var offsetX = 0, offsetY = 0, boundingRect;
    
            zoom = Math.max(minZoom, Math.min(maxZoom, zoom + zoomStep * delta));
            boundingRect = listeningArea.getBoundingClientRect();
            offsetX = event.originalEvent.clientX + listeningArea.scrollLeft;
            offsetY = event.originalEvent.clientY + listeningArea.scrollTop;
    
    //~ 		console.log(boundingRect);
    //~ 		console.log(listeningArea.scrollWidth + " " + listeningArea.scrollHeight);
    //~ 		console.log(offsetX + " " + offsetY);
            // Not perfect...
            var origin =
            [
                offsetX / listeningArea.scrollWidth,
                offsetY / listeningArea.scrollHeight
            ];
    //~ 		console.log(origin);
            zoomPlumb(zoom, instance, origin, elementToZoom);
    
            return false;
        });
    
        // Also manage dragging the background
        var mouseIsDown = false, clickX = 0, clickY = 0;
        function updateScrollPosition(e)
        {
            $(listeningArea)
                .scrollLeft(clickX - e.pageX)
                .scrollTop(clickY - e.pageY);
        }
        $(listeningArea).on(
        {
            'mousemove': function(e)
            {
                if (mouseIsDown)
                {
                    updateScrollPosition(e);
                }
            },
            'mousedown': function(e)
            {
                mouseIsDown = true;
                clickX = $(listeningArea).scrollLeft() + e.pageX;
                clickY = $(listeningArea).scrollTop() + e.pageY;
            },
            'mouseup': function()
            {
                mouseIsDown = false;
            }
        });
    }
    






    });

    
  }







  render() {
    return (
      <>
            <div id="main">
                <div className="jsplumb-container dss-visualization" id="dss-visualization">
                </div>
            </div>
      </>
    );
  }
}


