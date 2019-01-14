import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  isShowQRCode: false,
  topicList: [],
  articleList: [],
  boardList: [],
  authorList: [],
  articlePage: 1,
  isShowScrollTop: false
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
    case constants.MORE_ARTICLE:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.nextPage
      });
    case constants.SHOW_QR_CODE_STATUS:
      return state.set('isShowQRCode', !action.data);
    case constants.SHOW_SCROLL_TOP:
      return state.set('isShowScrollTop', action.show);
    default:
      return state;
  }
};
