import React from 'react';
import context from './imageContext';

export default class Image extends React.Component {
  render() {
    let path = (context === 'dev') ? 'bin/' : '';
    let source = this.props.src;

    let props = _.omit(this.props, 'src');

    return <img src={path + source} {...props}/>;
  }
}