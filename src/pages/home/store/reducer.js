import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  topicList: [],
  articleList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      return state.set('topicList', action.data);
    case constants.ARTICLE_LIST:
      return state.set('articleList', action.data);
    default:
      return state;
  }
};
