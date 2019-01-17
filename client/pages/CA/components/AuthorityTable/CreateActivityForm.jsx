import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Grid,
  Button,
} from '@icedesign/base';
import Operation from '../../../../api/api';

const { register } = Operation;
const { Row, Col } = Grid;
export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';
  constructor(props) {
    super(props);
    this.state = {
      name: props.value.name,
      age: props.value.age,
      address: props.value.address,
    };
    this.submit = this.submit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.value.name,
      age: nextProps.value.age,
      address: nextProps.value.address,
    });
  }

  submit = async () => {
    const result = await register(this.props.id);
    if (result.message === 'success') {
      window.location.reload();
    }
  };
  render() {
    return (
      <div className="create-activity-form">

        <IceContainer style={styles.container}>
          <div>
            <Row style={styles.formItem}>
              <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  名字：
              </Col>

              <Col s="12" l="10">
                {this.state.name}
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  年龄：
              </Col>

              <Col s="12" l="10">
                {this.state.age}
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  住址：
              </Col>

              <Col s="12" l="10">
                {this.state.address}
              </Col>
            </Row>

            <Row style={styles.btns}>
              <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                {' '}
              </Col>
              <Col s="12" l="10">
                <Button type="primary" onClick={this.submit}>
                    登记
                </Button>
              </Col>
            </Row>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
