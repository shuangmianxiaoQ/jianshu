import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWarpper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';

const Header = ({ focused, list, handleInputFocus, handleInputBlur }) => (
  <HeaderWarpper>
    <Logo />
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem>
      <NavItem className="right">登录</NavItem>
      <NavItem className="right">
        <svg className="icon icon-Aa" aria-hidden="true">
          <use xlinkHref="#icon-Aa" />
        </svg>
      </NavItem>
      <CSSTransition in={focused} timeout={300} classNames="slide">
        <NavSearch
          className={focused ? 'focused' : ''}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </CSSTransition>
      <SearchWrapper className={focused ? 'focused' : ''}>
        <svg className="icon icon-search" aria-hidden="true">
          <use xlinkHref="#icon-search" />
        </svg>
      </SearchWrapper>
      <SearchInfo className={focused ? 'focused' : ''}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            <svg className="icon icon-fresh" aria-hidden="true">
              <use xlinkHref="#icon-fresh" />
            </svg>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {list.map(item => (
            <SearchInfoItem key={item}>
              <a>{item}</a>
            </SearchInfoItem>
          ))}
        </SearchInfoList>
      </SearchInfo>
    </Nav>
    <Addition>
      <Button className="writting">
        <svg className="icon icon-writting" aria-hidden="true">
          <use xlinkHref="#icon-writting" />
        </svg>
        写文章
      </Button>
      <Button className="register">注册</Button>
    </Addition>
  </HeaderWarpper>
);

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list'])
});

const mapDispatchToProps = dispatch => ({
  handleInputFocus: () => {
    dispatch(actionCreators.getSearchList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur: () => dispatch(actionCreators.searchBlur())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
