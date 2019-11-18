import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 600
    };
  }

  onSliderChange = (level) => {
    console.log(level);
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, min, max, step } = this.state;

    const colorBoxes = colors[level].map((color) => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className='Palette'>
        <NavBar level={level} min={min} max={max} step={step} onSliderChange={this.onSliderChange} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <div>{/* Footer here */}</div>
      </div>
    );
  }
}
