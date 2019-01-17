import cookie from 'react-cookies';
// import { get, post } from './request.js';


// mock
const login = (value) => {
  cookie.save('account', value.account);
  return ({
    message: 'success',
  });
};
//卖方登入系统
const getListBySeller =() => {
  const result = {
    money : 1111,
    data : [
      {
        erc721ID : "12345",
        earID : '547576u',
        status : '1'
      },
      {
        erc721ID : "5796",
        earID : '8395345',
        status : '0'
      },
      {
        erc721ID : "567843",
        earID : '3245',
        status : '2'
      },
      {
        erc721ID : "748356",
        earID : '568950',
        status : '1'
      }
    ]
  }
  return result;
}
//买方进入系统
const getListByBuyer = () => {
  const result = {
    money : 1111,
    data : [
      {
        erc721ID : "12345",
        earID : '547576u',
        status : '1'
      },
      {
        erc721ID : "567843",
        earID : '3245',
        status : '2'
      }
    ]
  }
  return result;
}
export default {
  login,
  getListBySeller,
  getListByBuyer
};
