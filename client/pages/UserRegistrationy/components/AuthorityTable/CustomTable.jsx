import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';
import CreateActivityForm from './CreateActivityForm';

const { tasklist, Userinformation } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dialog: false,
      message: {},
      id: null,
      dialog1: false,
      lock: '',
    };
    this.showtasklist = this.showtasklist.bind(this);
  }

  componentWillMount = async () => {
    const result = await tasklist();
    this.setState({
      dataSource: result,
    });
  }
  hideDialog = () => {
    this.setState({
      dialog: false,
    });
  };
  hideDialog1 = () => {
    this.setState({
      dialog1: false,
    });
  };

  showtasklist = async (index) => {
    const result = await Userinformation(index);
    this.setState({
      dialog: true,
      message: result,
      id: index,
    });
  }
  showpassword = (index) => {
    const result = this.state.dataSource[index].password;
    this.setState({
      dialog1: true,
      lock: result,
    });
  }
  renderOper = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.showtasklist(index); }} />
      </div>
    );
  };
  renderpass = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="lock" style={styles.editIcon} onClick={() => { this.showpassword(index); }} />
      </div>
    );
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
          <Table.Column width={50} title="操作" cell={this.renderOper} align="center" />
        </Table>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '1000px' }}
          autoFocus
          footerAlign="center"
          title="用户信息"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <CreateActivityForm value={this.state.message} id={this.state.id} />
        </Dialog>
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
