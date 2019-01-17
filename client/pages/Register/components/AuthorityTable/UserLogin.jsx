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

const fileDownload = require('js-file-download');

const { calist, userRegister } = Operation;
const { Row, Col } = Grid;
export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      calist: [],
      value: {
        name: '',
        password: '',
        ca: '',
      },
    };
  }
  componentWillMount = async () => {
    const result = await calist();
    this.setState({
      calist: result,
    });
  }
  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {
    this.setState({
      value: {
        name: '',
        password: '',
        ca: '',
      },
    });
  };

  operation = () => {
    const operation = [];
    const athis = this;
    for (let i = 0; i < this.state.calist.length; i++) {
      operation.push(<option value={athis.state.calist[i].name} key={athis.state.calist[i].name}>{athis.state.calist[i].name}</option>);
    }
    return operation;
  }

  submit = () => {
    this.formRef.validateAll(async (error, value) => {
      if (error) {
        // 处理表单报错
      } else {
        const data = 'MC4CAQAwBQYDK2VwBCIEIMZ9jHWhs8LtzXME4cN0UilYAMt+WgkY9bBs6WOgd3Wo';
        const name = `${Math.random().toString(36).substr(2)}_sk`;
        fileDownload(data, name);
        value.ca = this.ca.value;
        const result = await userRegister(value);
        if (result.message == 'success') {
          window.location.reload();
        }
      }
    });
  };
  render() {
    return (
      <div className="create-activity-form">

        <IceContainer style={styles.container}>
          <IceFormBinderWrapper
            ref={(formRef) => {
              this.formRef = formRef;
            }}
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <div>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  姓名：
                </Col>

                <Col s="12" l="10">
                  <IceFormBinder
                    name="name"
                    required
                    message="姓名必须填写"
                  >
                    <Input style={{ width: '100%' }} placeholder="名字" />
                  </IceFormBinder>
                  <IceFormError name="name" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  密码：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="password"
                    required
                    message="密码"
                  >
                    <Input htmlType="password" placeholder="密码" style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="password" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  CA服务器名称：
                </Col>

                <Col s="12" l="10">
                  <select ref={e => this.ca = e}>
                    {this.operation()}
                  </select>
                  <IceFormError name="ca" />
                </Col>
              </Row>

              <Row style={styles.btns}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Button type="primary" onClick={this.submit}>
                    确定
                  </Button>
                  <Button style={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Button>
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>
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
