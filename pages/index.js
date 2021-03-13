import HomePage from 'containers/homepage';
import React, { PureComponent } from 'react';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  render() {
    return <HomePage />;
  }
}

export default Index;

Index.pageName = 'Index';
