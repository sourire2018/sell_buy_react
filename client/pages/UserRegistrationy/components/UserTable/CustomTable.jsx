import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import Operation from '../../../../api/api';
import cookie from 'react-cookies';
import IceIcon from '@icedesign/icon';

const { userlist } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      account: cookie.load('account'),
      dialog1: false,
      lock: '',
    };
  }

  componentWillMount = async () => {
    const result = await userlist();
    this.setState({
      dataSource: result,
    });
  }
  hideDialog1 = () => {
    this.setState({
      dialog1: false,
    });
  };
  renderpass = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="lock" style={styles.editIcon} onClick={() => { this.showpassword(index); }} />
      </div>
    );
  }
  showpassword = (index) => {
    const result = this.state.dataSource[index].password;
    this.setState({
      dialog1: true,
      lock: result,
    });
  }
  render() {
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={200} title="组织部门信息" dataIndex="depentment" />
          <Table.Column width={100} title="名称" dataIndex="name" />
          <Table.Column width={100} title="类型" dataIndex="type" />
          <Table.Column width={100} title="CA服务器名称" dataIndex="ca" />
          <Table.Column width={100} title="状态" dataIndex="status" cell={row => (row == '0' ? ('等待管理员注册') : ('注册成功'))} />
          <Table.Column width={50} title="密码" cell={this.renderpass} align="center" />
        </Table>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '1000px' }}
          autoFocus
          footerAlign="center"
          title="密码"
          onClose={this.hideDialog1}
          isFullScreen
          visible={this.state.dialog1}
        >
          {this.state.lock}
        </Dialog>
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
