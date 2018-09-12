import React, { Fragment } from 'react';
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

const Article = ({ articleList }) => {
  const list = articleList.toJS();

  return (
    <Fragment>
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
          {imgUrl ? <ArticleImg imgUrl={imgUrl} imgId={id} /> : null}
        </ArticleItem>
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList'])
});

export default connect(
  mapStateToProps,
  null
)(Article);
