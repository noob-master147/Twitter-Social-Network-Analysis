import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example10 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
      let jsPlumbInstance =  jsplumb.jsPlumb.getInstance();
   
   
     

      jsPlumbInstance.connect({
        source:'item_left',
        target:'item_right',
        endpoint:"Dot",
        anchors : [
            ["Perimeter",{shape:"Triangle",rotation:25} ],
            ["Perimeter",{shape:"Triangle",rotation:-335} ]

        ]
       // connector:["Flowchart",{curviness:1,stub:60},{cssClass:"connectorClass"}],
       
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


