import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* pass palettes individually from the imported array */}
        <Palette {...seedColors} />
      </div>
    );
  }
}
