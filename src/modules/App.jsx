import React from 'react';

const styles = require('./zapp.scss');

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
      </div>
    );
  }
}