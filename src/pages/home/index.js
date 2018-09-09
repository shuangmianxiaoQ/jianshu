import React from 'react';
import { HomeWarpper, HomeMain, HomeAside, Banner, Carousel } from './style';
import Topic from './components/topic';
import Article from './components/article';
import Board from './components/board';
import Authors from './components/authors';

const Home = () => (
  <HomeWarpper>
    <HomeMain>
      <Carousel>
        <Banner />
      </Carousel>
      <Topic />
      <Article />
    </HomeMain>
    <HomeAside>
      <Board />
      <Authors />
    </HomeAside>
  </HomeWarpper>
);

export default Home;
