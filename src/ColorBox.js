import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    // extract props for easier access using object destructuring
    const { name, background } = this.props;
    return (
      <CopyToClipboard text='Now, when we click on a ColorBox, this very text should be copied on our clipboard.'>
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
