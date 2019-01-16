import React from 'react';
import Loadable from 'react-loadable';

const LoadableDetail = Loadable({
  loader: () => import('.'),
  loading: () => <div>加载中</div>
});

export default () => <LoadableDetail />;
