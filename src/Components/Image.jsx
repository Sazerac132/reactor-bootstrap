import React from 'react';

export default class Image extends React.Component {
  render() {
    let path = (process.env.NODE_ENV === 'production') ? '' : 'bin/';
    let source = this.props.src;

    let props = _.omit(this.props, 'src');

    return <img src={path + source} {...props}/>;
  }
}