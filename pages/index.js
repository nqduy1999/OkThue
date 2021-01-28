import HomePage from 'components/homepage';
import React, { PureComponent } from 'react';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, 2500);
  // }
  render() {
    return <HomePage />;
  }
}

export default Index;

Index.pageName = 'Index';
