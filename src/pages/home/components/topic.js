import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topic extends Component {
  render() {
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {topicList.toJS().map(item => (
          <TopicItem key={item.id}>
            <img src={item.href} alt="64" />
            <span>{item.name}</span>
          </TopicItem>
        ))}
        <TopicItem className="more-hot">
          <span>更多热门专题</span>
        </TopicItem>
      </TopicWrapper>
    );
  }

  componentDidMount() {
    const { initTopicList } = this.props;
    initTopicList();
  }
}

const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
});

const mapDispatchToProps = dispatch => ({
  initTopicList: () => dispatch(actionCreators.getTopicList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
