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
    
    const {colors} = this.props.palette;
    const {level, min, max, step} = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <div style={style}>
          <p>Sliderrrrrrr</p>
          <SliderWithTooltip defaultValue={level} min={min} max={max} step={step} tipFormatter={percentFormatter} tipProps={{ overlayClassName: 'foo' }} onChange={this.onSliderChange} />
        </div>

        <div>{/* Navbar goes here */}</div>
        {/* ColorBox Components go here*/}
        <div className='Palette-colors'>{colorBoxes}</div>
        <div>{/* Footer here */}</div>
      </div>
    );
  }
}
