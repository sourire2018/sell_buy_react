import React, { Component } from 'react';
import TableFilter from './TableFilter';
import CustomTable from './CustomTable';
import Options from '../../../../api/api';

const {getListBySeller} = Options;

export default class AuthorityTable extends Component {
  static displayName = 'AuthorityTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      money: 0 ,
      data : []
    };
  }
  componentWillMount = async () => {
    const result = await getListBySeller();
    this.setState({
      money: result.money,
      data: result.data
    });
  }
  render() {
    return (
      <div style={styles.container}>
        <TableFilter money = {this.state.money}/>
        <CustomTable data= {this.state.data}/>
      </div>
    );
  }
}

const styles = {};
