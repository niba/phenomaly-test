import React, { Component } from 'react';
import './App.css';
import FizzBuzz from './FizzBuzz';
import FileUpload from './FileUpload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-element">
          <h3> Fizz Buzz </h3>
          <FizzBuzz />
        </div>
        <div className="App-element">
          <h3> Upload </h3>
          <FileUpload />
        </div>
      </div>
    );
  }
}

export default App;
