import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Use a chosen palette for demonstration during dev */}
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}
