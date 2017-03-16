import React from 'react';

import JokerImage from '../joker.jpg';

const styles = require('./app.scss');

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
        <img src={JokerImage} className={styles['joker-image']} />
      </div>
    );
  }
}