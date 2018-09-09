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
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
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
  }
`;
