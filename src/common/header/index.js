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
  SearchIconWrapper,
  SearchInfo,
  SearchInfoWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchWrapper,
  HeaderContainer
} from './style';

const Header = ({
  focused,
  mouseIn,
  switched,
  list,
  current,
  total,
  handleInputFocus,
  handleInputBlur,
  handleMouseIn,
  handleMouseOut,
  handleChangeList
}) => {
  const newList = list.toJS(); // list是immutable对象，先将其转化为普通的JS数组
  let pageList = newList.slice((current - 1) * 10, current * 10);

  // 当Ajax异步请求获取到数据后，再进行渲染组件
  if (newList.length) {
    pageList = pageList.map(item => (
      <SearchInfoItem key={item}>
        <a>{item}</a>
      </SearchInfoItem>
    ));
  }

  return (
    <HeaderWarpper>
      <HeaderContainer>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left hover">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <svg className="icon icon-Aa" aria-hidden="true">
              <use xlinkHref="#icon-Aa" />
            </svg>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <SearchIconWrapper className={focused ? 'focused' : ''}>
              <svg className="icon icon-search" aria-hidden="true">
                <use xlinkHref="#icon-search" />
              </svg>
            </SearchIconWrapper>
            <SearchInfo
              className={focused || mouseIn ? 'show' : ''}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              <SearchInfoWrapper>
                <SearchInfoTitle>
                  热门搜索
                  <CSSTransition
                    in={switched}
                    timeout={3000}
                    classNames="rotate"
                  >
                    <SearchInfoSwitch
                      onClick={() => handleChangeList(current, total)}
                    >
                      <svg className="icon icon-fresh" aria-hidden="true">
                        <use xlinkHref="#icon-fresh" />
                      </svg>
                      换一批
                    </SearchInfoSwitch>
                  </CSSTransition>
                </SearchInfoTitle>
                <SearchInfoList>{pageList}</SearchInfoList>
              </SearchInfoWrapper>
            </SearchInfo>
          </SearchWrapper>
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
      </HeaderContainer>
    </HeaderWarpper>
  );
};

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  switched: state.getIn(['header', 'switched']),
  list: state.getIn(['header', 'list']),
  current: state.getIn(['header', 'current']),
  total: state.getIn(['header', 'total'])
});

const mapDispatchToProps = dispatch => ({
  handleInputFocus: () => {
    dispatch(actionCreators.getSearchList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur: () => dispatch(actionCreators.searchBlur()),
  handleMouseIn: () => dispatch(actionCreators.mouseEnter()),
  handleMouseOut: () => dispatch(actionCreators.mouseLeave()),
  handleChangeList: (current, total) => {
    dispatch(actionCreators.iconSpin());
    if (current < total) {
      dispatch(actionCreators.changeList(current + 1));
    } else {
      dispatch(actionCreators.changeList(1));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
