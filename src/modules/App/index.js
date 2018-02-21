import React from 'react';
import TodoList from '../TodoList';

const styles = require('./style.scss');

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <h1>This is my To-Do list!</h1>
        <TodoList />
      </div>
    );
  }

}