import React, { Component } from 'react';
import withFileUploadAbility from './withFileUploadAbility';
import Button from '../Common/Button';
import UploadIcon from './UploadIcon';
import { convertBytesToSize } from './utils';

const FileUploadButton = withFileUploadAbility(Button);

const types = {
  IMAGE: 'IMAGE',
  NORMAL: 'NORMAL',
}

class FileUpload extends Component {

  constructor() {
    super();

    this.state = {
      isFileLoaded: false,
      previewImage: undefined,
      size: 0,
      width: 0,
      height: 0,
      name: '',
      type: '',
    }

    this.fileUpload = this.fileUpload.bind(this);
    this.previewOnLoad = this.previewOnLoad.bind(this);
  }

  previewOnLoad(e) {
    this.setState({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  }

  fileUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      let previewImage;
      let fileType = types.NORMAL;
      if (file.type.match('image.*')) {
        previewImage = e.target.result;
        fileType = types.IMAGE;
      }
      this.setState({
        fileType,
        previewImage,
        isFileLoaded: true,
        size: convertBytesToSize(file.size),
        name: file.name,
        type: file.name.split('.').pop(),
      })
    }

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex'
          }}
        >
          <input
            style={{
              width: '100%'
            }}
            readOnly
            value={this.state.name}
          />
          <FileUploadButton
            icon={<UploadIcon />}
            text="Open"
            fileUpload={this.fileUpload}
            customStyle={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          />
        </div>
        <p> Size: {this.state.size} </p>
        <p> Type: {this.state.type} </p>
        {
          this.state.fileType === types.IMAGE ? (
            <div>
              <p> Width: {`${this.state.width}px`}</p>
              <p> Height: {`${this.state.height}px`} </p>
              <div style={{ height: 200, width: 200, margin: 'auto' }}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  onLoad={this.previewOnLoad}
                  src={this.state.previewImage}
                  alt="preview"
                />
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}



export default FileUpload;
