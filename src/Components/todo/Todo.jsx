import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'react-toolbox/lib/checkbox';
import { todo } from '../Actions';
import TodoReducer from './TodoReducer';

class TestCheckbox extends React.Component {
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
      let tempState = this.props.todoState;
      tempState.map(function(cb){
          if(cb.name === field){
              cb.checked = value;
          }
      })
      this.props.todo(tempState)
  };

  render () {
      console.log(this.props)
      let stateTemp = this.props.todoState;
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
export function mapDispatchToProps(dispatch){
    return {
        todo: (evt)=> dispatch(todo(evt))
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        todoState: state.TodoReducer.todo
    }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default (withConnect)(TestCheckbox)
