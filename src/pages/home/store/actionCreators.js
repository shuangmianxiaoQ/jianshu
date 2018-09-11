import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './index';

const topicList = data => ({
  type: constants.TOPIC_LIST,
  data: fromJS(data)
});

const articleList = data => ({
  type: constants.ARTICLE_LIST,
  data: fromJS(data)
})

export const getTopicList = () => {
  return dispatch => {
    axios
      .get('api/topicList.json')
      .then(res => {
        const data = res.data;
        dispatch(topicList(data));
      })
      .catch(() => console.log('获取接口失败'));
  };
};

export const getArticleList = () => {
  return dispatch => {
    axios
      .get('api/articleList.json')
      .then(res => dispatch(articleList(res.data)))
      .catch(() => console.log('获取接口失败'));
  };
};
