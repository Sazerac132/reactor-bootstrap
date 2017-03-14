import React from 'react';

export default class Image extends React.Component {
  render() {
    // don't touch this line ('context' declaration) - it gets modified by gulp when starting build or dev job to
    // modify directory that images pull from
    let context = 'bin/';
    let source = this.props.src;

    let props = _.omit(this.props, 'src');

    return <img src={context + source} {...props}/>;
  }
}