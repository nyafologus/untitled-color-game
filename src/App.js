import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[2]));
    return (
      <div>
        {/* passing the newly generated palette down to the Palette Component as a prop */}
        <Palette palette={generatePalette(seedColors[2])} />
      </div>
    );
  }
}
