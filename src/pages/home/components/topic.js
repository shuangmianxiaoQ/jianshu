import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

const Topic = ({ topicList }) => (
  <TopicWrapper>
    {topicList.map(item => (
      <TopicItem key={item.get('id')}>
        <img src={item.get('imgUrl')} alt={item.get('id')} />
        <span>{item.get('name')}</span>
      </TopicItem>
    ))}
    <TopicItem className="more-hot">
      <span>更多热门专题</span>
      <svg className="icon icon-right" aria-hidden="true">
        <use xlinkHref="#icon-right" />
      </svg>
    </TopicItem>
  </TopicWrapper>
);

const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
});

export default connect(
  mapStateToProps,
  null
)(Topic);
