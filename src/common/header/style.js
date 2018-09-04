import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWarpper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  height: 56px;
`;

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: 768px;
  max-width: 1440px;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  width: 100px;
  height: 100%;
  background: url(${logoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  margin: 0 auto;
  padding-right: 40px;
  width: 960px;
`;

export const NavItem = styled.div`
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;

  &.left {
    float: left;
    margin-right: 10px;
    line-height: 56px;
  }

  &.right {
    float: right;
    font-size: 15px;
    line-height: 57px;
    color: #969696;

    .icon-Aa {
      margin-right: 0.3em;
      font-size: 1.1em;
    }
  }

  &.active {
    color: #ea6f5a;
  }

  &.hover:hover {
    background: #f5f5f5;
  }
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin: 9px 15px;
  border: 1px solid #eee;
  border-radius: 40px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  color: #333;
  background: #eee;
  outline: none;

  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }

  &.slide-enter {
    transition: width 0.3s ease-in;
  }

  &.slide-enter-active {
    width: 240px;
  }

  &.slide-exit {
    transition: width 0.3s ease-out;
  }

  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchIconWrapper = styled.a`
  display: inline-block;
  position: relative;
  right: 50px;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;

  &.focused {
    border-radius: 50%;
    background: #969696;
    .icon-search {
      color: #fff;
    }
  }

  .icon-search {
    width: 1em;
    height: 1em;
    color: #969696;
    margin-top: 7px;
  }
`;

export const SearchInfo = styled.div`
  /* visibility: hidden; */
  position: absolute;
  left: 15px;
  border-radius: 4px;
  width: 250px;
  /* opacity: 0; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  &::before {
    position: absolute;
    top: -5px;
    left: 27px;
    z-index: -1;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
    content: '';
  }

  &::after {
    position: absolute;
    bottom: 99%;
    left: 20px;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    content: '';
  }

  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

export const SearchInfoWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 20px 10px;
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 10px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.a`
  float: right;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #2f2f2f;
  }

  .icon-fresh {
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
  }

  &.rotate-enter {
    transition: all 3s linear;
  }

  &.rotate-enter-active {
    width: 2em;
  }

  &.rotate-exit {
    transition: all 3s linear;
  }

  &.rotate-exit-active {
    width: 0.5em;
  }
`;

export const SearchInfoList = styled.ul`
  font-size: 0;
`;

export const SearchInfoItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  line-height: 28px;

  a {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
  }

  a:hover {
    border-color: #b4b4b4;
    color: #333;
    cursor: pointer;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.div`
  float: right;
  border: 1px solid #ec6149;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;

  &.writting {
    margin: 8px 15px 0;
    width: 100px;
    line-height: 38px;
    color: #fff;
    background: #ea6f5a;
    .icon-writting {
      vertical-align: -0.2em;
      margin-right: 0.2em;
    }
  }

  &.register {
    margin: 9px 5px 0 15px;
    width: 80px;
    line-height: 36px;
    color: #ea6f5a;
  }

  &.register:hover {
    border-color: #ec6149;
    color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
  }
`;
