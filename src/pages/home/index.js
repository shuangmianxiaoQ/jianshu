import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HomeWarpper, HomeMain, HomeAside } from './style';
import Carousel from './components/carousel';
import Topic from './components/topic';
import Article from './components/article';
import Board from './components/board';
import Download from './components/download';
import Author from './components/author';

class Home extends Component {
  render() {
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
      </HomeWarpper>
    );
  }

  componentDidMount() {
    const { initHomeData } = this.props;
    initHomeData();
  }
}

const mapDispatchToProps = dispatch => ({
  initHomeData: () => dispatch(actionCreators.getHomeInfo())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
