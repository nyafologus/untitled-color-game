import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    // change 'copied' state to true for 1.5sec
    // then change it back to false afterwards
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    // extract props for easier access using object destructuring
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        {/* onCopy a callback function is invoked,  */}
        <div className='ColorBox' style={{ background }}>
          {/* Why do we need another div? ('copy-overlay) */}
          {/* Why dont we just scale up ColorBox? */}
          {/* We want to scale up the whole box, but we need to make a below div for that separately, because we only want to scale up the background and not the whole ColorBox with all of its contents. Since we want to have different content inside, we need another div.*/}
          {/* TLDR: when we use scale to grow a div, it will grow all of the content inside of the div as well */}

          {/* if this.state.copied is true, add the class "show" */}
          <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {/* routes to the individual color page */}
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
