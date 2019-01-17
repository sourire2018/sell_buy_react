import React, { Component } from 'react';
import './styles.css';

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {
      money : props.money 
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
     money : nextProps.money
    });
  }

  render() {
    return (
      <div style={styles.tableFilter}>
        <div style={styles.title}>余额： {this.state.money} ETH</div>
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
