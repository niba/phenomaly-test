import React, { Component } from 'react';
import Button from './Common/Button';
import './FizzBuzz.css';

class FizzBuzz extends Component {

  constructor() {
    super();

    this.state = {
      counter: 1
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  checkNumber(number) {
    if (number % 5 === 0 && number % 3 === 0) {
      return <span className="green">{"FizzBuzz"}</span>;
    }
    if (number % 5 === 0) {
      return <span className="blue">{"Buzz"}</span>;
    }
    if (number % 3 === 0) {
      return <span className="yellow">{"Fizz"}</span>;
    }
    return number;
  }

  render() {
    return (
      <div>
         <span style={{ marginRight: '10px', fontWeight: 'bold' }}> {this.checkNumber(this.state.counter)} </span>
         <Button onClick={this.incrementCounter} text="increment" />
      </div>
    );
  }
}



export default FizzBuzz;
