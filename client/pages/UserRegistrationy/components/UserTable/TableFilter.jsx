import React, { Component } from 'react';
import { Button, Dialog } from '@icedesign/base';
import CreateActivityForm from './CreateActivityForm';
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
        <div style={styles.title}>任务</div>
        <Button type="primary" style={styles.submitButton} onClick={() => { this.addpig(); }}>
          账号注册
        </Button>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '1000px' }}
          autoFocus
          footerAlign="center"
          title="账号注册"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <CreateActivityForm />
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
    marginLeft: '20px',
  },
};
