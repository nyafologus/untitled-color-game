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
            trackStyle={{ height: 0 }}
            handleStyle={{
              borderColor: '#0f1150',
              height: 17,
              width: 17,
              marginLeft: 0,
              marginTop: -4.5,
              backgroundColor: '#0f1150',
              borderStyle: 'solid',
              borderWidth: 5,
              boxShadow: 'none'
            }}
            railStyle={{ height: 6 }}
          />
        </div>
      </header>
    );
  }
}
