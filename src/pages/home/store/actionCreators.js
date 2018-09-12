import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './index';

const homeInfo = data => ({
  type: constants.HOME_INFO,
  data: fromJS(data)
});

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get('api/homeInfo.json')
      .then(res => dispatch(homeInfo(res.data)))
      .catch(() => console.log('获取接口失败'));
  };
};

export const changeShowQRCodeStatus = data => ({
  type: constants.SHOW_QR_CODE_STATUS,
  data: fromJS(data)
})