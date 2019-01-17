import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';
import UserTable from './components/UserTable';
import cookie from 'react-cookies';

export default class UserRegistrationy extends Component {
  static displayName = 'UserRegistrationy';

  constructor(props) {
    super(props);
    this.state = {
      account: '',
    };
  }
  componentWillMount() {
    const result = cookie.load('status');
    const athis = this;
    if (result != 1) {
      window.location.href = `${window.location.origin}/#/login`;
    } else {
      athis.setState({
        account: cookie.load('account'),
      });
    }
  }
  render() {
    if (this.state.account == 'Admin') {
      return (
        <div className="pigsty-page">
          <AuthorityTable />
        </div>
      );
    }
    return (
      <div className="pigsty-page">
        <UserTable />
      </div>
    );
  }
}
