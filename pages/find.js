import FindComponent from 'containers/find';
import React, { PureComponent } from 'react';

class Find extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  render() {
    return <FindComponent />;
  }
}

export default Find;

Find.pageName = 'Find';
