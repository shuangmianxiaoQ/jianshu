import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topic extends Component {
  render() {
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {topicList.map(item => (
          <TopicItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt="64" />
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
