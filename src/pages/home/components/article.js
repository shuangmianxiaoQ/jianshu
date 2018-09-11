import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ArticleItem,
  ArticleTitle,
  ArticleAbstract,
  ArticleMeta,
  MetaNickname,
  MetaIcon,
  ArticleImg
} from '../style';
import { actionCreators } from '../store';

class Article extends Component {
  render() {
    const { articleList } = this.props;
    const list = articleList.toJS();

    return (
      <div>
        {list.map(({ id, title, abstract, meta, imgUrl }) => (
          <ArticleItem key={id} className={imgUrl ? '' : 'no-spacing'}>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleAbstract>{abstract}</ArticleAbstract>
            <ArticleMeta>
              <MetaNickname>{meta.nickname}</MetaNickname>
              <MetaIcon className="comments">
                <svg className="icon icon-comments" aria-hidden="true">
                  <use xlinkHref="#icon-comments" />
                </svg>
                {meta.comments_count}
              </MetaIcon>
              <MetaIcon>
                <svg className="icon icon-heart" aria-hidden="true">
                  <use xlinkHref="#icon-heart" />
                </svg>
                {meta.heart_count}
              </MetaIcon>
            </ArticleMeta>
            {imgUrl ? <ArticleImg imgUrl={imgUrl} /> : null}
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
