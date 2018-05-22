import React, { Component } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

export default class TestCheckbox extends React.Component {
    constructor(){
        super();
        this.state = {
      checkbox: [
          {name: "Milk", checked: false},
          {name: "Eggs", checked: false},
          {name: "Bread", checked: false}
      ]
  };
    }
  

  handleChange = (field, value) => {
      let tempState = this.state.checkbox;
      tempState.map(function(cb){
          if(cb.name === field){
              cb.checked = value;
          }
      })
      this.setState({Checkbox: tempState})
  };

  render () {
      let stateTemp = this.state.checkbox;
      let check = stateTemp.map(function(cb){
          return(
          <Checkbox
          checked={cb.checked}
          label={cb.name}
              onChange = {this.handleChange.bind(this, cb.name)}
              key={cb.name}
        />)
      }, this)
      let todo = "", done = "";
      stateTemp.map(temp => {
          if(temp.checked === false){
              todo += temp.name + ","
          }else{
              done += temp.name + ","
          }
      })
    return (
      <div>
        {check}
            <h3>To do</h3>
            {todo}
            <h3>Done</h3>
            {done}
      </div>
    );
  }
}
