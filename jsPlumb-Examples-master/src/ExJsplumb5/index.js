import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb5 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
   
    var options = ['To do', 'In progress', 'Done'];
  
	jsplumb.jsPlumb.ready(function() {
	  var i = 0;
	  var saveState = function(state) {
		$.post('http://www.example.com/saveState', { 
		    id: $(state).attr('id'), 
			top: $(state).position().top, 
			left: $(state).position().left 
		});
	  }
	  
	  $('#container').dblclick(function(e) {
		var newState = $('<div>').attr('id', 'state' + i).addClass('item');
		var title = $('<div>').addClass('title');
		var stateName = $('<select>');
		stateName.append($('<option></option>').attr('value', '#').text('Select an option'));
		$.each(options, function(key, value) {
		  if ($('#container').find('#state-' + key).length === 0) {
		    stateName.append($('<option></option>')
		      .attr('value', key)
			  .text(value));
		  }
	    });
		title.append(stateName);
		
		var connect = $('<div>').addClass('connect');
		
		newState.css({
		  'top': e.pageY,
		  'left': e.pageX
		});
		
		newState.append(title);
		newState.append(connect);
		
		$('#container').append(newState);
		
		jsplumb.jsPlumb.draggable(newState, {
		  containment: 'parent',
		  stop: function(event) {
            if ($(event.target).find('select').length === 0) {
			  saveState(event.target);			
            }
		  }
		});
		newState.dblclick(function(e) {
            jsplumb.jsPlumb.detachAllConnections($(this));
		  $(this).remove();
		  e.stopPropagation();
		});		
		
		stateName.change(function(e) {
			if (this.value !== '#') {
		      var state = $(this).closest('.item');
			  state.children('.title').text($(this).find(':selected').text());
			  state.attr('id', 'state-' + this.value);
			  $("select option[value='" + this.value + "']").remove();
			  
              jsplumb.jsPlumb.makeTarget(newState, {
                anchor: 'Continuous'
              });
		
              jsplumb.jsPlumb.makeSource(connect, {
                parent: newState,
                anchor: 'Continuous'
              });				  
			  saveState(state);
			}
		});
		
		stateName.focus();
		
		i++;    
	  });  
	  
      jsplumb.jsPlumb.bind('connection', function(info) {
       // $.post('http://www.example.com/saveConnection', { from: info.sourceId, to: info.targetId});
       alert('New connection!\nFrom: ' + info.sourceId + '\nTo: ' + info.targetId);
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


