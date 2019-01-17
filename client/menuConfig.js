// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  //   {
  //     name: '首页',
  //     path: '/',
  //     icon: 'home',
  //   },
  //   {
  //     name: '反馈',
  //     path: 'https://github.com/alibaba/ice',
  //     external: true,
  //     newWindow: true,
  //     icon: 'message',
  //   },
  //   {
  //     name: '帮助',
  //     path: 'https://alibaba.github.io/ice',
  //     external: true,
  //     newWindow: true,
  //     icon: 'bangzhu',
  //   },
];

const asideMenuConfig = [
  {
    name: '账号管理',
    path: '/user',
    icon: 'yonghu',
    children: [
      { name: '账号注册', path: '/user/registration' },
      { name: '账号登记', path: '/user/register' },
    ],
  }, {
    name: '配置管理',
    path: '/configure',
    icon: 'shezhi',
    children: [
      { name: 'CA服务器', path: '/configure/CA' },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
