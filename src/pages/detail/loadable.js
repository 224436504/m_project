import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
      return <div>is Loading .Please Wait for some secondes</div>
  }
});

export default ()=><LoadableComponent />