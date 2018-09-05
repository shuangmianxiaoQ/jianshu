import React from 'react';
import { HomeWarpper, HomeMain, HomeAside } from './style';
import banner from '../../statics/banner/banner_02.jpg';
import Collection from './components/collection';
import List from './components/list';
import Board from './components/board';
import Authors from './components/authors';

const Home = () => (
  <HomeWarpper>
    <HomeMain>
      <img src={banner} className="banner" alt="" />
      <Collection />
      <List />
    </HomeMain>
    <HomeAside>
      <Board />
      <Authors />
    </HomeAside>
  </HomeWarpper>
);

export default Home;
