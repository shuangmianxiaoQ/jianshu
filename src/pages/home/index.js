import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HomeWarpper, HomeMain, HomeAside, BackTop } from './style';
import Carousel from './components/carousel';
import Topic from './components/topic';
import Article from './components/article';
import Board from './components/board';
import Download from './components/download';
import Author from './components/author';

class Home extends PureComponent {
  componentDidMount() {
    const { initHomeData, changeScrollTopShow } = this.props;
    initHomeData();

    window.addEventListener('scroll', changeScrollTopShow);
  }

  componentWillUnmount() {
    // 组件销毁时清除滚动事件监听
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { isShowScrollTop } = this.props;
    console.log(isShowScrollTop);

    return (
      <HomeWarpper>
        <HomeMain>
          <Carousel />
          <Topic />
          <Article />
        </HomeMain>
        <HomeAside>
          <Board />
          <Download />
          <Author />
        </HomeAside>
        {isShowScrollTop ? (
          <BackTop onClick={this.handleScrollTop}>
            <svg className="icon icon-up" aria-hidden="true">
              <use xlinkHref="#icon-up" />
            </svg>
          </BackTop>
        ) : null}
      </HomeWarpper>
    );
  }
}

const mapStateToProps = state => ({
  isShowScrollTop: state.getIn(['home', 'isShowScrollTop'])
});

const mapDispatchToProps = dispatch => ({
  initHomeData: () => dispatch(actionCreators.getHomeInfo()),
  changeScrollTopShow: () => {
    if (document.documentElement.scrollTop > 250) {
      dispatch(actionCreators.toogleScrollTopShow(true));
    } else {
      dispatch(actionCreators.toogleScrollTopShow(false));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
