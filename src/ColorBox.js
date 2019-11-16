import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    return (
      <div className='ColorBox' style={{ background: this.props.background }}>
        <span>{this.props.name}</span>
        {/* routes to the individual color page */}
        <span>MORE</span>
      </div>
    );
  }
}
