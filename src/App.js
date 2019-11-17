import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Use a chosen palette for demonstration during dev */}
        <Palette {...seedColors[6]} />
      </div>
    );
  }
}
