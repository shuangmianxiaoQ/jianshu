import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './index';

const getList = data => ({
  type: constants.GET_SEARCH_LIST,
  data: fromJS(data),
  total: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const getSearchList = () => {
  return dispatch => {
    axios
      .get('api/searchList.json')
      .then(res => {
        const data = res.data;
        dispatch(getList(data));
      })
      .catch(() => console.log('获取接口失败'));
  };
};

export const changeList = current => ({
  type: constants.CHANGE_LIST,
  current
})

export const iconSpin = () => ({
  type: constants.ICON_SPIN
}) 
