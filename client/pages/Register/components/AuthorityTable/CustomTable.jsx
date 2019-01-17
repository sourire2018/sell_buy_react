import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';

const { registerlist } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dialog1: false,
      lock: '',
    };
  }

  componentWillMount = async () => {
    const result = await registerlist();
    this.setState({
      dataSource: result,
    });
  }
  hideDialog1 = () => {
    this.setState({
      dialog1: false,
    });
  };

  showpassword = (index) => {
    const result = this.state.dataSource[index].password;
    this.setState({
      dialog1: true,
      lock: result,
    });
  }
  renderpass = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.showpassword(index); }} />
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
          <Table.Column width={200} title="名称" dataIndex="name" />
          <Table.Column width={200} title="CA服务器名称" dataIndex="ca" />
          <Table.Column width={200} title="密码" cell={this.renderpass} align="center" />
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
