import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  topicList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      return state.set('topicList', action.data);
    default:
      return state;
  }
};
