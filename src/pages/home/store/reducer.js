import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  isShowQRCode: false,
  topicList: [],
  articleList: [],
  boardList: [],
  authorList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_INFO:
      return state.merge({
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList'),
        boardList: action.data.get('boardList'),
        authorList: action.data.get('authorList')
      });
    case constants.SHOW_QR_CODE_STATUS:
      return state.set('isShowQRCode', !action.data)
    default:
      return state;
  }
};
