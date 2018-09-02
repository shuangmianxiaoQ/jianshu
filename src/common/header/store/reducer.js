import { constants } from './index';
import { fromJS } from 'immutable';

// 返回一个immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值
    // 返回一个全新的对象，不会修改原对象
    return state.set('focused', true);
  }

  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }

  if (action.type === constants.GET_SEARCH_LIST) {
    return state.set('list', action.data);
  }

  return state;
};
