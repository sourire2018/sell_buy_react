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

const { addCA } = Operation;
const { Row, Col } = Grid;
export default class AddMessage extends Component {
  static displayName = 'AddMessage';
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      address: 'http://localhost:7045',
      value: {
        name: '',
        address: 'http://localhost:7045',
      },
    };
    this.address = this.address.bind(this);
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };
  address =(e) => {
    this.setState({
      address: e,
    });
  }
  reset = () => {
    this.setState({
      value: {
        name: '',
        address: this.state.address,
      },
    });
  };

  submit = () => {
    this.formRef.validateAll(async (error, value) => {
      if (error) {
        // 处理表单报错
      } else {
        const result = await addCA(value);
        if (result.message === 'success') {
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
                  CA服务器名：
                </Col>

                <Col s="12" l="10">
                  <IceFormBinder
                    name="name"
                    required
                    message="服务器名必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="name" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  CA服务器地址：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="address"
                    required
                    message="CA服务器地址必须填写"
                  >
                    <Input style={{ width: '100%' }} value={this.state.address} onChange={this.address} />
                  </IceFormBinder>
                  <IceFormError name="address" />
                </Col>
              </Row>
              <Row style={styles.btns}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Button type="primary" onClick={this.submit}>
                    添加
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
