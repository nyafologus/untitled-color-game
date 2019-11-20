import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 600,
      colorFormat: 'hex'
    };
  }

  onSliderChange = (level) => {
    console.log(level);
    this.setState({ level });
  };

  handleColorFormatChange = (newFormat) => {
    this.setState({ colorFormat: newFormat });
  };

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, colorFormat } = this.state;

    const colorBoxes = colors[level].map((color) => <ColorBox background={color[colorFormat]} name={color.name} />);
    return (
      <div className='Palette'>
        <NavBar
          level={level}
          onSliderChange={this.onSliderChange}
          format={colorFormat}
          handleColorFormatChange={this.handleColorFormatChange}
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <footer className='Palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}
