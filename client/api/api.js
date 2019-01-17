import cookie from 'react-cookies';
// import { get, post } from './request.js';

// 生成随机密码
const randomWord = (randomFlag, min, max) => {
  let str = '',
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '-', '.', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', ':', '<', '>', '?'];

  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;// 任意长度
  }
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
};

// mock
const login = (value) => {
  cookie.save('account', value.account);
  return ({
    message: 'success',
  });
};

// Admin代办任务列表
const tasklist = () => {
  const userlist = cookie.load('userlist');
  const result = [];
  if (userlist != undefined) {
    return userlist;
  }

  return result;
};

// 用户信息展示
const Userinformation = (id) => {
  const userlist = cookie.load('userlist');
  return userlist[id];
};

// Admin登记
const register = (id) => {
  const userlist = cookie.load('userlist');
  userlist[id].status = '1';
  if (userlist[id].userpassword != '') {
    userlist[id].password = userlist[id].userpassword;
  } else {
    userlist[id].password = randomWord(true, 6, 12);
  }
  cookie.save('userlist', userlist);
  return ({
    message: 'success',
  });


  return result;
};

// 添加用户登记
const addmessage = (value) => {
  const userlist = cookie.load('userlist');
  const result = [];
  if (userlist != undefined) {
    userlist.push(value);
    cookie.save('userlist', userlist);
    return ({
      message: 'success',
    });
  }
  result.push(value);
  cookie.save('userlist', result);
  return ({
    message: 'success',
  });
};

// 用户信息列表
const userlist = (account) => {
  const userlist = cookie.load('userlist');
  const result = [];
  if (userlist != undefined) {
    return userlist;
  }
  return result;
};

// 添加CA服务器

const addCA = (value) => {
  const ca = cookie.load('ca');
  const result = [];
  if (ca != undefined) {
    ca.push(value);
    cookie.save('ca', ca);
  } else {
    result.push(value);
    cookie.save('ca', result);
  }
  return ({
    message: 'success',
  });
};

// 查看所有CA服务器

const calist = () => {
  const ca = cookie.load('ca');
  const result = [];
  if (ca != undefined) {
    return ca;
  }
  return result;
};


// 查看用户注册信息

const registerlist = () => {
  const reg = cookie.load('reg');
  const result = [];
  if (reg != undefined) {
    return reg;
  }
  return result;
};
const userRegister = (value) => {
  const reg = cookie.load('reg');
  const result = [];
  if (reg != undefined) {
    reg.push(value);
    cookie.save('reg', reg);
  } else {
    result.push(value);
    cookie.save('reg', result);
  }
  return ({
    message: 'success',
  });
};
export default {
  login,
  tasklist,
  Userinformation,
  register,
  userlist,
  addmessage,
  addCA,
  calist,
  registerlist,
  userRegister,
};
