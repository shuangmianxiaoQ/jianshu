import React from 'react';
import { ArticleItem, ArticleTitle, ArticleAbstract } from '../style';

const Article = () => (
  <div>
    <ArticleItem>
      <div>
        <ArticleTitle>这9本书，让你再也不辜负睡前时光</ArticleTitle>
        <ArticleAbstract>
          对于我来说，睡前是每天碎片时间中最大的一块，为了不辜负睡前时光，我常常会在这段时间阅读一些有价值的内容。
          那么问题来了，什么样的枕边书适合睡前阅读？
        </ArticleAbstract>
      </div>
      <img />
    </ArticleItem>
  </div>
);

export default Article;
