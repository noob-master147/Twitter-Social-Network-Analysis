import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb3 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
   
	jsplumb.jsPlumb.ready(function() {
        var i = 0;
        $('#container').dblclick(function(e) {
          var newState = $('<div>').attr('id', 'state' + i).addClass('item');
          var title = $('<div>').addClass('title');
          var stateName = $('<input>').attr('type', 'text');
          title.append(stateName);
          
          var connect = $('<div>').addClass('connect');
          
          newState.css({
            'top': e.pageY,
            'left': e.pageX
          });
          
          newState.append(title);
          newState.append(connect);
          
          $('#container').append(newState);
          
          jsplumb.jsPlumb.makeTarget(newState, {
            anchor: 'Continuous'
          });
          
          jsplumb.jsPlumb.makeSource(connect, {
            parent: newState,
            anchor: 'Continuous'
          });		
          
          jsplumb.jsPlumb.draggable(newState, {
            containment: 'parent'
          });
          newState.dblclick(function(e) {
            jsplumb.jsPlumb.detachAllConnections($(this));
            $(this).remove();
            e.stopPropagation();
          });		
          
          stateName.keyup(function(e) {
            if (e.keyCode === 13) {
              //var state = $(this).closest('.item');
              //state.children('.title').text(this.value);
              $(this).parent().text(this.value);
            }
          });
          
          stateName.focus();
          
          i++;    
        });  
      }); 
  }

  render() {
    return (
      <>
       <div id="container"></div>
      </>
    );
  }
}


