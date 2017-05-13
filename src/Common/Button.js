import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    return (
      <div
        className="btn"
        style={this.props.customStyle}
        onClick={this.props.onClick}
      >
        {this.props.icon ? this.props.icon : null}
        <span> {this.props.text} </span>
      </div>
    );
  }
}



export default Button;
