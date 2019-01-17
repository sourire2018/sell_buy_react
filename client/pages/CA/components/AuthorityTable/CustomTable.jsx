import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';
import CreateActivityForm from './CreateActivityForm';

const { calist } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentWillMount = async () => {
    const result = await calist();
    this.setState({
      dataSource: result,
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
          <Table.Column width={200} title="CA服务器名" dataIndex="name" />
          <Table.Column width={200} title="CA服务器地址" dataIndex="address" />
        </Table>

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
