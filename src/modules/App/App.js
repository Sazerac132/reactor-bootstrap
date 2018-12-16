import React, { Component } from 'react';

import JokerList from '../JokerList';

import JokerImage from '../joker.jpg';
import styles from './style.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>The Joker's To-Do List</h1>
        <img src={JokerImage} className={styles['joker-image']} />
        <JokerList />
      </div>
    );
  }
}