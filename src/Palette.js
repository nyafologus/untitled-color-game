import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[600].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <div>{/* Navbar goes here */}</div>
        {/* ColorBox Components go here*/}
        <div className='Palette-colors'>{colorBoxes}</div>
        <div>{/* Footer here */}</div>
      </div>
    );
  }
}
