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
      depentment: props.value.depentment,
      name: props.value.name,
      type: props.value.type,
      ca: props.value.ca,
    };
    this.submit = this.submit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      depentment: nextProps.value.depentment,
      name: nextProps.value.name,
      type: nextProps.value.type,
      ca: nextProps.value.ca,
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
              <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  组织的部门信息：
              </Col>

              <Col s="12" l="10">
                {this.state.depentment}
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  名称：
              </Col>

              <Col s="12" l="10">
                {this.state.name}
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  类型：
              </Col>

              <Col s="12" l="10">
                {this.state.type}
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                CA服务器名称：
              </Col>

              <Col s="12" l="10">
                {this.state.ca}
              </Col>
            </Row>


            <Row style={styles.btns}>
              <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                {' '}
              </Col>
              <Col s="12" l="10">
                <Button type="primary" onClick={this.submit}>
                    确定
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
