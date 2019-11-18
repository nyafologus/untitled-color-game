import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const style = { width: 300, margin: 20 };

function percentFormatter(v) {
  return `${v} %`;
}

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      min: 100,
      max: 900,
      step: 100
    };
  }

  onSliderChange = (level) => {
    console.log(level);
    this.setState({level});
  }

  render() {
    // TODO: implement a slider to dinamically change color value
    const colorBoxes = this.props.palette.colors[this.state.level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <div style={style}>
          <p>Sliderrrrrrr</p>
          <SliderWithTooltip defaultValue={this.state.level} min={this.state.min} max={this.state.max} step={this.state.step} tipFormatter={percentFormatter} tipProps={{ overlayClassName: 'foo' }} onChange={this.onSliderChange} />
        </div>

        <div>{/* Navbar goes here */}</div>
        {/* ColorBox Components go here*/}
        <div className='Palette-colors'>{colorBoxes}</div>
        <div>{/* Footer here */}</div>
      </div>
    );
  }
}
