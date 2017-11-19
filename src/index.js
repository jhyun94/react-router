import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'

import PostsIndex from './components/PostIndex';
import PostNew from './components/post_new';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
