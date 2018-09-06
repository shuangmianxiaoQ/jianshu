import React from 'react';
import { TopicWrapper, TopicItem } from '../style';

const Topic = () => (
  <TopicWrapper>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>自然科普</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>手绘</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>读书</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>摄影</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>@IT·互联网</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>简书电影</span>
    </TopicItem>
    <TopicItem>
      <img src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
      <span>故事</span>
    </TopicItem>
    <TopicItem className="more-hot">
      <span>更多热门专题 ></span>
    </TopicItem>
  </TopicWrapper>
);

export default Topic;
