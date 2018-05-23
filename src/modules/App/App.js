import React, { Component } from 'react';

import JokerImage from '../joker.jpg';
import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
        <img src={JokerImage} className={styles['joker-image']} />
      </div>
    );
  }
}