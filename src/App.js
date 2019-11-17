import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Updating chosen palette because I get bored after a while :> */}
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}
