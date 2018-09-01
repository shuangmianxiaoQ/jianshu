import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWarpper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
    return (
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
          <CSSTransition
            in={this.state.focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              className={this.state.focused ? 'focused' : ''}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            />
          </CSSTransition>
          <SearchWrapper className={this.state.focused ? 'focused' : ''}>
            <svg className="icon icon-search" aria-hidden="true">
              <use xlinkHref="#icon-search" />
            </svg>
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
      </HeaderWarpper>
    );
  }

  handleInputFocus = () => {
    this.setState(() => ({ focused: true }));
  };

  handleInputBlur = () => {
    this.setState(() => ({ focused: false }));
  };
}

export default Header;
