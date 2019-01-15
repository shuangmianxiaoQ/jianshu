import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ArticleItem,
  ArticleTitle,
  ArticleAbstract,
  ArticleMeta,
  MetaNickname,
  MetaIcon,
  ArticleImg,
  LoadMore
} from '../style';

import { actionCreators } from '../store';

const Article = ({ articleList, articlePage, loadMoreArticlList }) => {
  const list = articleList.toJS();

  return (
    <Fragment>
      {list.map(({ id, title, abstract, meta, imgUrl }, index) => (
        <ArticleItem key={index} className={imgUrl ? '' : 'no-spacing'}>
          <Link to={`/detail/${index + 1}`}>
            <ArticleTitle>{title}</ArticleTitle>
          </Link>
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
          {imgUrl ? <ArticleImg imgUrl={imgUrl} imgId={id} /> : null}
        </ArticleItem>
      ))}
      <LoadMore onClick={() => loadMoreArticlList(articlePage)}>
        阅读更多
      </LoadMore>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = dispatch => ({
  loadMoreArticlList: page => dispatch(actionCreators.getMoreArticleList(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
