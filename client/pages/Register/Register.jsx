import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';

export default class Register extends Component {
  static displayName = 'Register';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <AuthorityTable />
      </div>
    );
  }
}
