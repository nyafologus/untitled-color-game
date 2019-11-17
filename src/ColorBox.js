import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }
  render() {
    // extract props for easier access using object destructuring
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div className='ColorBox' style={{ background }}>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {/* routes to the individual color page */}
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
