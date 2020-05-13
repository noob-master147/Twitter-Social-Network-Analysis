import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb18 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    var targetOption = {anchor:"TopCenter",
    maxConnections:-1,
    isSource:false,
    isTarget:true,
    endpoint:["Dot", {radius:8}],
    paintStyle:{fillStyle:"#66FF00"},
        setDragAllowedWhenFull:true}

var sourceOption = {anchor:"BottomCenter",
        maxConnections:-1,
    isSource:true,
    isTarget:false,
    endpoint:["Dot", {radius:8}],
    paintStyle:{fillStyle:"#FFEF00"},
        setDragAllowedWhenFull:true}


        jsplumb.jsPlumb.bind("ready", function() {

            jsplumb.jsPlumb.addEndpoint('block1', targetOption);
            jsplumb.jsPlumb.addEndpoint('block1', sourceOption);

            jsplumb.jsPlumb.addEndpoint('block2', targetOption);
            jsplumb.jsPlumb.addEndpoint('block2', sourceOption);

            jsplumb.jsPlumb.addEndpoint('block3', targetOption);
            jsplumb.jsPlumb.addEndpoint('block3', sourceOption);

            jsplumb.jsPlumb.addEndpoint('block4', targetOption);
            jsplumb.jsPlumb.addEndpoint('block4', sourceOption);

            jsplumb.jsPlumb.draggable('block1');
            jsplumb.jsPlumb.draggable('block2');
            jsplumb.jsPlumb.draggable('block3');
            jsplumb.jsPlumb.draggable('block4'); 
            
            var connections = [];
$.each(jsplumb.jsPlumb.getConnections(), function (idx, connection) {
    connections.push({
        connectionId: connection.id,
        pageSourceId: connection.sourceId,
        pageTargetId: connection.targetId
    });
});


console.log("connections",connections)
});
     
var blocks = []
$("#main .node").each(function (idx, elem) {
    var $elem = $(elem);
    blocks.push({
        blockId: $elem.attr('id'),
        positionX: parseInt($elem.css("left"), 10),
        positionY: parseInt($elem.css("top"), 10)
    });
});

console.log("blocks",blocks)
  }

  render() {
    return (
      <>
            <div id="main">
                <div id="block1" className="node">node 0</div>
                <div id="block2" className="node">node 1</div>
                <div id="block3" className="node">node 2</div>
                <div id="block4" className="node">node 3</div>
            </div>
      </>
    );
  }
}


