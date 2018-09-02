import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './index';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const getList = data => ({
  type: constants.GET_SEARCH_LIST,
  data: fromJS(data)
});

export const getSearchList = () => {
  return dispatch => {
    axios
      .get('api/searchList.json')
      .then(res => {
        const data = res.data.slice(0, 10);
        dispatch(getList(data));
      })
      .catch(() => console.log('获取接口失败'));
  };
};
