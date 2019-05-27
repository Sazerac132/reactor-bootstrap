import React, { Component } from 'react';

import JokerList from '../JokerList';

import JokerImage from '../joker.jpg';
import './style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The Joker&apos;s To-Do List</h1>
        <img src={JokerImage} className='joker-image' />
        <JokerList />
      </div>
    );
  }
}
