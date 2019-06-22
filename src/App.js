import React, { Component } from 'react';
import logo from './logo.svg';
import Click from './Components/Click';
import TestCheckbox from './Components/todo/Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestCheckbox />
      </div>
    );
  }
}

export default App;
