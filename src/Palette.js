import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';


const style = { width: 300, margin: 20, fontWeight: 500};


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
          <span>Level: {level}</span>
          <Slider defaultValue={level} min={min} max={max} step={step} onChange={this.onSliderChange} 
                  trackStyle={{ backgroundColor: '#BADA55', height: 0 }}
                  handleStyle={{
                    borderColor: '#016e17',
                    height: 13,
                    width: 13,
                    marginLeft: 0,
                    marginTop: -3,
                    backgroundColor: '#016e17',
                    borderStyle: "solid",
                    borderWidth: 2,
                    boxShadow: "none"
                  }}
                  railStyle={{ height: 6 }}
          />
        </div>

        <div>{/* Navbar goes here */}</div>
        <div className='Palette-colors'>{colorBoxes}</div>
        <div>{/* Footer here */}</div>
      </div>
    );
  }
}
