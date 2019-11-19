import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = (e) => {
    this.props.handleColorFormatChange(e.target.value);
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  render() {
    const { level, onSliderChange } = this.props;

    const style = { width: 300, margin: 20 };
    return (
      <header className='NavBar'>
        <div className='logo'>
          <a href='/'>untitled color game</a>
        </div>

        <div className='slider-container'>
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
        </div>

        <div className='select-container'>
          <Select onChange={this.handleChange}>
            <MenuItem value={'hex'}>HEX - #BADA55</MenuItem>
            <MenuItem value={'rgb'}>RGB - rgb(186,218,85)</MenuItem>
            <MenuItem value={'rgba'}>RGBA - rgba(186,218,85,1.0)</MenuItem>
          </Select>
        </div>

        <div className='snackbar-container'>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
          />
        </div>
      </header>
    );
  }
}

// {
//   backgroundColor: green[600],
//   fontSize: 20,
//   display: 'flex',
//   alignItems: 'center',

// }
