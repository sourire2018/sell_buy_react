/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import cx from 'classnames';
import Layout from '@icedesign/layout';
import { Icon } from '@icedesign/base';
import Menu, { SubMenu, Item as MenuItem } from '@icedesign/menu';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from 'foundation-symbol';
import { enquire } from 'enquire-js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
//import { asideMenuConfig } from '../../menuConfig';
import './scss/dark.scss';

const theme = 'dark';

@withRouter
export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      openDrawer: false,
      isScreen: undefined,
    };
  }

  componentDidMount() {
    this.redirectToDashboard();
    this.enquireScreenRegister();
  }

  /**
   * 默认重定向到主页
   */
  redirectToDashboard = () => {
    const {
      location: { pathname },
      history,
    } = this.props;
    if (pathname === '/') {
      history.push('/list');
    }
  };

  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  enquireScreenRegister = () => {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, this.enquireScreenHandle('isMobile'));
    enquire.register(isTablet, this.enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, this.enquireScreenHandle('isDesktop'));
  };

  enquireScreenHandle = (type) => {
    let collapse;
    if (type === 'isMobile') {
      collapse = false;
    } else if (type === 'isTablet') {
      collapse = true;
    } else {
      collapse = this.state.collapse;
    }

    const handler = {
      match: () => {
        this.setState({
          isScreen: type,
          collapse,
        });
      },
      unmatch: () => {
        // handler unmatched
      },
    };

    return handler;
  };

  toggleCollapse = () => {
    const { collapse } = this.state;
    const openKeys = !collapse ? [] : this.openKeysCache;

    this.setState({
      collapse: !collapse,
      openKeys,
    });
  };

  /**
   * 左侧菜单收缩切换
   */
  toggleMenu = () => {
    const { openDrawer } = this.state;
    this.setState({
      openDrawer: !openDrawer,
    });
  };

  /**
   * 当前展开的菜单项
   */
  onOpenChange = (openKeys) => {
    this.setState({
      openKeys,
    });
    this.openKeysCache = openKeys;
  };

  /**
   * 响应式时点击菜单进行切换
   */
  onMenuClick = () => {
    this.toggleMenu();
  };

  /**
   * 获取当前展开的菜单项
   */

  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <Layout
        fixable
        style={{ minHeight: '100vh' }}
        className={cx(`basic-layout-${theme} ice-design-layout`, {
          'ice-design-aside-collapled': this.state.collapse,
        })}
      >
        <Header
          theme={theme}
          isMobile={this.state.isScreen !== 'isDesktop' ? true : undefined}
        />

        <Layout.Section>
          {this.state.isScreen === 'isMobile' && (
            <a className="menu-btn" onClick={this.toggleMenu}>
              <Icon type="category" size="small" />
            </a>
          )}
          {this.state.openDrawer && (
            <div className="open-drawer-bg" onClick={this.toggleMenu} />
          )}

          <Layout.Aside
            width="auto"
            theme={theme}
            className={cx('ice-design-layout-aside', {
              'open-drawer': this.state.openDrawer,
            })}
          >
            {this.state.isScreen === 'isMobile' && <Logo />}
            {/* 侧边菜单项 begin */}
            {this.state.isScreen !== 'isMobile' && (
              <a className="collapse-btn" onClick={this.toggleCollapse}>
                <Icon
                  type={this.state.collapse ? 'arrow-right' : 'arrow-left'}
                  size="small"
                />
              </a>
            )}

            
            {/* 侧边菜单项 end */}
          </Layout.Aside>

          {/* 主体内容 */}
          <Layout.Main scrollable>
            {this.props.children}
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}
