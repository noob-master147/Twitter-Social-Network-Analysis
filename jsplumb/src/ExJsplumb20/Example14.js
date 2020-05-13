import React, { Component } from 'react';
import './style.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Example14 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }


  componentDidMount() {
      let jsPlumbInstance =  jsplumb.jsPlumb.getInstance();
      let common = {
        connector:["Flowchart"],
        anchor : ["Right","Right"],
        endpoint:"Dot"
      }
   
      let self = this;
   
    

      jsPlumbInstance.connect({
        source:"item_left",
        target:"item_right",
       overlays:[
           ["Arrow",{width:24,length:24,location:0.80}],
           ["Label",{
               label:"Process",id:"label",cssClass:"aLabel",
               events:{
                   click:function (label) {
                       console.log("label",label.label)
                       self.onLabelChange(label.label)
                   }
               }
           }]
       ]
       
    },common);
      
    jsPlumbInstance.draggable("item_left",{
        constrain:true
    });
  
    
  }



  onLabelChange = (label) =>{
      console.log("label method",label)
      alert(label)

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


