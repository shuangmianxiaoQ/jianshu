import React from 'react';
import Header from '../../common/header';

const Detail = ({ match }) => {
  return (
    <div>
      <Header />
      <br />
      详情页动态路由参数获取，match.params.id：{match.params.id}
    </div>
  );
};

export default Detail;
