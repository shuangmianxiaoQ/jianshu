import { constants } from './index';
import { fromJS } from 'immutable';

// 返回一个immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  switched: false,
  list: [],
  current: 1,
  total: 1
});

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值
  // 返回一个全新的对象，不会修改原对象
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.GET_SEARCH_LIST:
      return state.merge({
        list: action.data,
        total: action.total
      });
    case constants.CHANGE_LIST:
      return state.set('current', action.current);
    default:
      return state;
  }
};
