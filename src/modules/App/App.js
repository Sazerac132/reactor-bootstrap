import React, { Component } from 'react';

import JokerImage from '../joker.jpg';
import styles from './app.scss';

export default class App extends Component {
  render() {
    console.log(x);
    console.log(styles);
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
        <img src={JokerImage} className={styles['joker-image']} />
      </div>
    );
  }
}