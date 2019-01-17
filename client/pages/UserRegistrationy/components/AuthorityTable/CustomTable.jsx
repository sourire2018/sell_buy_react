import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';


export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
     dataSource : nextProps.data
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
          <Table.Column width={200} title="ERC721ID" dataIndex="erc721ID" />
          <Table.Column width={100} title="耳号" dataIndex="earID" />
          <Table.Column width={100} title="状态" dataIndex="status" cell={row => (row == '0' ? ('待售') : (row == '1' ? ("已售") : ("已收货")))} />
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
