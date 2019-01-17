import React, { Component } from 'react';
import { Button, Dialog } from '@icedesign/base';
import AddMessage from './AddMessage';
import './styles.css';

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
    };
  }
  addpig = () => {
    this.setState({
      dialog: true,
    });
  }
  hideDialog = () => {
    this.setState({
      dialog: false,
    });
  };
  render() {
    return (
      <div style={styles.tableFilter}>
        <div style={styles.title}>CA</div>
        <div style={styles.submitButton}>
          <Button type="primary" onClick={() => { this.addpig(); }}>
            添加
          </Button>
        </div>

        <Dialog
          className="simple-form-dialog"
          style={{ width: '1000px' }}
          autoFocus
          footerAlign="center"
          title="添加CA服务器"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <AddMessage />
        </Dialog>
      </div>
    );
  }
}

const styles = {
  tableFilter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    marginBottom: '20px',
    background: '#fff',
  },
  title: {
    height: '20px',
    lineHeight: '20px',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingLeft: '12px',
    borderLeft: '4px solid #666',
  },
  filter: {
    display: 'flex',
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  filterLabel: {
    fontWeight: '500',
    color: '#999',
  },
  submitButton: {
    float: 'right',
  },
};
