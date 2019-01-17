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
  Button, Dialog,
} from '@icedesign/base';
import Operation from '../../../../api/api';
import IceIcon from '@icedesign/icon';

const { addmessage, calist } = Operation;
const { Row, Col } = Grid;
export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      calist: [],
      depentment: 'org1.depentment1',
      status: false,
      value: {
        depentment: 'org1.depentment1',
        name: '',
        type: '',
        userpassword: '',
        ca: '',
      },
    };
    this.showpassword = this.showpassword.bind(this);
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
        depentment: this.state.depentment,
        name: '',
        type: '',
        userpassword: '',
        ca: '',
      },
    });
  };

  submit = () => {
    const athis = this;
    this.formRef.validateAll(async (error, value) => {
      if (error) {
        // 处理表单报错
      } else {
        const operation = value;
        operation.status = '0';
        operation.ca = athis.ca.value;
        operation.type = athis.type.value;
        const result = await addmessage(operation);
        if (result.message === 'success') {
          window.location.reload();
        }
      }
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

  dependment =(e) => {
    this.setState({
      depentment: e,
    });
  }
  showpassword =() => {
    const athis = this;
    if (this.state.status == true) {
      athis.setState({
        status: false,
      });
    } else {
      this.setState({
        status: true,
      });
    }
  }
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
                  名称：
                </Col>

                <Col s="12" l="10">
                  <IceFormBinder
                    name="name"
                    required
                    message="名称必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="name" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  密码：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder name="userpassword">
                    <Input style={{ width: '90%' }} htmlType={this.state.status == true ? ('text') : ('password')} ref={e => (this.password = e)} />
                  </IceFormBinder>
                  <IceIcon
                    type="eye"
                    size="small"
                    style={styles.inputIcon}
                    onClick={this.showpassword}
                  />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  类型：
                </Col>

                <Col s="12" l="10">
                  <select ref={e => this.type = e}>
                    <option value="device" key="device">device</option>
                    <option value="user" key="user">user</option>
                    <option value="node" key="node">node</option>
                  </select>
                  <IceFormError name="type" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                  组织部门信息：
                </Col>

                <Col s="12" l="10" >
                  <IceFormBinder
                    name="depentment"
                    required
                    message="部门信息必须填写"
                  >
                    <Input style={{ width: '100%' }} value={this.state.depentment} onChange={this.dependment} />
                  </IceFormBinder>
                  <IceFormError name="depentment" />
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
                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
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
  inputIcon: {
    color: '#999',
  },
};
