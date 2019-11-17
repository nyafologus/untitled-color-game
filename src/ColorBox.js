import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    // extract props for easier access using object destructuring
    const { name, background } = this.props;
    return (
      <div className='ColorBox' style={{ background }}>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
        </div>
        <button className='copy-button'>Copy</button>
        {/* routes to the individual color page */}
        <span className='see-more'>MORE</span>
      </div>
    );
  }
}
