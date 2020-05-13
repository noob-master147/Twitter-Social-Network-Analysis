import React, { Component } from 'react';
import './style.css';
import jsplumb from 'jsplumb';
import $ from 'jquery';

export default class ExJsplumb1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
    jsplumb.jsPlumb.ready(function() {
        jsplumb.jsPlumb.makeSource($('.item'), {
        connector: 'StateMachine'
      });
      jsplumb.jsPlumb.makeTarget($('.item'), {
        anchor: 'Continuous'
      });
    });
  }

  render() {
    return (
     <>
     <div id="state1" class="item"></div>
    <div id="state2" class="item"></div>
    <div id="state3" class="item"></div>
     </>
    );
  }
}


