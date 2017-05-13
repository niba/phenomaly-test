import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const withFileUploadAbility = (WrappedComponent) => {
  return class FileUpload extends Component {

    handleChange = e => {
      this.props.fileUpload(e);
    }

    triggerInput = e => {
      ReactDOM.findDOMNode(this.fileInput).click();
    }

    render() {
      const hiddenInputStyle = {
        position: 'absolute',
        top: '-9999px'
      };

      return (
        <div
          style={{
            display: 'inline-block',
          }}
          onClick={this.triggerInput}
        >
          <input
            {...this.props}
            type="file"
            onChange={this.handleChange}
            ref={c => this.fileInput = c}
            style={hiddenInputStyle}
          />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}

export default withFileUploadAbility;
