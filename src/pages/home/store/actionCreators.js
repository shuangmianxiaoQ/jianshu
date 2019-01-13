import axios from 'axios';
import { fromJS, List } from 'immutable';
import { constants } from './index';

const homeInfo = data => ({
  type: constants.HOME_INFO,
  data: fromJS(data)
});

const moreArticle = (data, nextPage) => ({
  type: constants.MORE_ARTICLE,
  data: fromJS(data),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get('api/homeInfo.json')
      .then(res => dispatch(homeInfo(res.data)))
      .catch(() => console.log('获取接口失败'));
  };
};

export const getMoreArticleList = page => {
  return dispatch => {
    axios
      .get('/api/moreArticle.json?page=' + page)
      .then(res => dispatch(moreArticle(res.data, page + 1)))
      .catch(() => console.log('获取接口失败'));
  };
};

export const changeShowQRCodeStatus = data => ({
  type: constants.SHOW_QR_CODE_STATUS,
  data: fromJS(data)
});
