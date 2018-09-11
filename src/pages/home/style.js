import styled from 'styled-components';

export const HomeWarpper = styled.div`
  margin: 0 auto;
  width: 960px;
  height: 900px;
`;

export const HomeMain = styled.div`
  float: left;
  padding: 30px 0 0 15px;
  width: 640px;
`;

export const Carousel = styled.div`
  margin-bottom: 35px;
  height: 270px;
`;

export const Banner = styled.img.attrs({
  src: 'statics/banner/banner_02.jpg'
})`
  border-radius: 6px;
  width: 100%;
  height: 100%;
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
      width: 0.8em;
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
  alt: '120'
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
