import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ArticleItem,
  ArticleTitle,
  ArticleAbstract,
  ArticleMeta,
  MetaNickname,
  MetaIcon
} from '../style';
import { actionCreators } from '../store';

class Article extends Component {
  render() {
    const { articleList } = this.props;
    return (
      <div>
        {articleList.map(item => (
          <ArticleItem>
            <ArticleTitle>{item.get('title')}</ArticleTitle>
            <ArticleAbstract>
              对于我来说，睡前是每天碎片时间中最大的一块，为了不辜负睡前时光，我常常会在这段时间阅读一些有价值的内容。那么问题来了，什么样的枕边书适合睡前阅读？
            </ArticleAbstract>
            <ArticleMeta>
              <MetaNickname>精读君</MetaNickname>
              <MetaIcon className="comments">
                <svg className="icon icon-comments" aria-hidden="true">
                  <use xlinkHref="#icon-comments" />
                </svg>
                3
              </MetaIcon>
              <MetaIcon>
                <svg className="icon icon-heart" aria-hidden="true">
                  <use xlinkHref="#icon-heart" />
                </svg>
                20
              </MetaIcon>
            </ArticleMeta>
            <img src="statics/article/article_01.jpg" alt="120" />
          </ArticleItem>
        ))}
      </div>
    );
  }

  componentDidMount() {
    const { initArticleList } = this.props;
    initArticleList();
  }
}

const mapDispatchToProps = dispatch => ({
  initArticleList: () => dispatch(actionCreators.getArticleList())
});

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList'])
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
