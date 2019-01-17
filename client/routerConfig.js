// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Login from './pages/Login';
import UserRegistrationy from './pages/UserRegistrationy';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import CA from './pages/CA';

const routerConfig = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user/registration',
    layout: BasicLayout,
    component: UserRegistrationy,
  },
  {
    path: '/user/register',
    layout: BasicLayout,
    component: Register,
  },
  {
    path: '/configure/CA',
    layout: BasicLayout,
    component: CA,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
