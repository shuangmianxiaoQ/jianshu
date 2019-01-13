import styled from 'styled-components';

export const HomeWarpper = styled.div`
  margin: 0 auto;
  width: 960px;

  &::after {
    display: block;
    clear: both;
    content: '';
  }
`;

export const HomeMain = styled.div`
  float: left;
  padding: 30px 0 0 15px;
  width: 640px;
`;

export const CarouselWrapper = styled.div`
  margin-bottom: 35px;
  height: 270px;

  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }
`;

export const HomeAside = styled.div`
  float: right;
  padding: 30px 0 0;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 9px;
`;

export const TopicItem = styled.a`
  display: inline-block;
  margin: 0 22px 18px 0;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  min-height: 32px;
  color: #333;
  background: #f7f7f7;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }

  span {
    padding: 0 11px;
    font-size: 14px;
  }

  &.more-hot {
    border: none;
    color: #787878;
    background: transparent;

    span {
      padding: 0;
    }

    .icon-right {
      margin-left: 0.1em;
      width: 1.1em;
      height: 1em;
    }
  }
`;

export const ArticleItem = styled.div`
  position: relative;
  margin-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 2px 20px;
  padding-right: 140px;
  min-height: 130px;

  &.no-spacing {
    padding-right: 0;
  }
`;

export const ArticleContent = styled.div``;

export const ArticleTitle = styled.a`
  display: block;
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #969696;
  }
`;

export const ArticleAbstract = styled.p`
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;

export const ArticleMeta = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;

  a,
  span {
    margin-right: 10px;
  }
`;

export const MetaNickname = styled.a`
  cursor: pointer;

  &:hover {
    color: #787878;
  }
`;

export const MetaIcon = styled.span`
  .icon {
    margin: 2px 2px 0 0;
  }

  .icon-comments {
    cursor: pointer;
  }

  .icon-comments:hover {
    color: #787878;
  }
`;

export const ArticleImg = styled.img.attrs({
  src: props => props.imgUrl,
  alt: props => props.imgId
})`
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -54px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  width: 125px;
  height: 100px;
  cursor: pointer;
`;

export const LoadMore = styled.a`
  display: block;
  margin: 30px auto 60px;
  padding: 10px 15px;
  width: 100%;
  height: 40px;
  line-height: 20px;
  background-color: #a5a5a5;
  text-align: center;
  font-size: 15px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;

export const BoardWrapper = styled.div`
  margin-top: -5px;
  min-height: 228px;
  padding-bottom: 4px;
`;

export const BoardItem = styled.img.attrs({
  src: props => props.imgUrl,
  alt: props => props.imgId
})`
  margin-bottom: 3px;
  border-radius: 4px;
  width: 100%;
  min-height: 50px;
`;

export const DownloadWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 10px 22px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
    opacity: 0.8;
  }
`;

export const DownloadInfo = styled.div`
  display: inline-block;
  margin-left: 12px;
  vertical-align: middle;
`;

export const DownloadTitle = styled.div`
  position: relative;
  font-size: 15px;
  color: #333;

  .icon-right {
    position: absolute;
    margin-left: 0.1em;
  }
`;

export const DownloadDescription = styled.div`
  margin-top: 9px;
  font-size: 13px;
  color: #999;
`;

export const DownloadPopover = styled.div`
  position: absolute;
  top: -195px;
  left: 48px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 1px;
  max-width: 276px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const PopoverArrow = styled.div`
  position: absolute;
  top: 193px;
  left: 80px;

  &::after {
    content: '';
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #fff transparent transparent;
  }
`;

export const PopoverContent = styled.div`
  padding: 10px;

  img {
    width: 160px;
    height: 160px;
  }
`;

export const AuthorWrapper = styled.div``;

export const AuthorTitle = styled.div`
  margin: 32px 0 18px;
  font-size: 14px;
  color: #969696;

  a {
    float: right;
    cursor: pointer;
  }

  .icon-fresh {
    width: 0.95em;
    height: 0.95em;
    margin-right: 0.3em;
  }
`;

export const AuthorItem = styled.div`
  margin-top: 8px;
  line-height: 20px;
`;

export const AuthorAvatar = styled.img.attrs({
  src: props => props.avatarSource,
  alt: props => props.avatarId
})`
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const AuthorInfo = styled.div`
  display: inline-block;
  position: relative;
  top: -7px;
`;

export const AuthorName = styled.a`
  margin-right: 60px;
  padding-top: 5px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

export const AuthorAbstract = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
`;

export const FollowAuthor = styled.a`
  float: right;
  margin-top: 5px;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;

  .icon-add {
    position: relative;
    top: -1px;
    width: 0.95em;
    height: 0.95em;
    margin-right: 0.05em;
  }
`;

export const AllAuthor = styled.button``;
