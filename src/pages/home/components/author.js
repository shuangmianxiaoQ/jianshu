import React from 'react';
import { connect } from 'react-redux';
import {
  AuthorWrapper,
  AuthorItem,
  AuthorTitle,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorAbstract,
  FollowAuthor
} from '../style';

const Author = ({ authorList }) => {
  const list = authorList.toJS();

  return (
    <AuthorWrapper>
      <AuthorTitle>
        <span>推荐作者</span>
        <a>
          <svg className="icon icon-fresh" aria-hidden="true">
            <use xlinkHref="#icon-fresh" />
          </svg>
          换一批
        </a>
      </AuthorTitle>
      {list.map(
        ({ id, avatar_source, nickname, total_wordage, total_likes_count }) => (
          <AuthorItem key={id}>
            <AuthorAvatar avatarSource={avatar_source} avatarId={id} />
            <AuthorInfo>
              <AuthorName>{nickname}</AuthorName>
              <AuthorAbstract>
                写了
                {total_wordage >= 10 ** 3
                  ? (total_wordage / 10 ** 3).toFixed(1) + 'k'
                  : total_wordage}
                字 ·{' '}
                {total_likes_count >= 1000
                  ? (total_likes_count / 10 ** 3).toFixed(1) + 'k'
                  : total_likes_count}
                喜欢
              </AuthorAbstract>
            </AuthorInfo>
            <FollowAuthor>
              <svg className="icon icon-add" aria-hidden="true">
                <use xlinkHref="#icon-add" />
              </svg>
              关注
            </FollowAuthor>
          </AuthorItem>
        )
      )}
    </AuthorWrapper>
  );
};

const mapStateToProps = state => ({
  authorList: state.getIn(['home', 'authorList'])
});

export default connect(
  mapStateToProps,
  null
)(Author);
