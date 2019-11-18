import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[2], 10));
    return (
      <div>
        {/* Updating chosen palette because I get bored after a while :> */}
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}
