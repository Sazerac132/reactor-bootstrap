import React from 'react';
import Image from '../../Components/Image.jsx';

import JokerImage from '../joker.jpg';

const styles = require('./app.scss');

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>insert title here</h1>
        <Image src={JokerImage} className={styles['joker-image']} />
      </div>
    );
  }
}