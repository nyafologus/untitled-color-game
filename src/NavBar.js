import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    const { level, onSliderChange } = this.props;
    const style = { width: 300, margin: 20 };
    return (
      <header className='NavBar'>
        <div className='logo'>
          <a href='/'>untitled color game</a>
        </div>
        <span className='level-marker'>Level: {level}</span>
        <div style={style}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={onSliderChange}
            trackStyle={{ backgroundColor: '#BADA55', height: 0 }}
            handleStyle={{
              borderColor: '#6d0036',
              height: 13,
              width: 13,
              marginLeft: 0,
              marginTop: -3,
              backgroundColor: '#6d0036',
              borderStyle: 'solid',
              borderWidth: 2,
              boxShadow: 'none'
            }}
            railStyle={{ height: 6 }}
          />
        </div>
      </header>
    );
  }
}
