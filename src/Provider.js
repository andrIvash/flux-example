import React from 'react';

class Provider extends React.Component {
  componentWillMount() {
    window.store = this.props.store
  }
  
  render() {
    return this.props.children
  }
}

export default Provider;