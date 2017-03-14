import React from 'react';
// import styles from './zapp.css';
const styles = require('./zapp.scss');

export default class App extends React.Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
      </div>
    );
  }
}