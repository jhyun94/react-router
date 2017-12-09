import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxPromise from 'redux-promise';

import reducers from './reducers';
import PostAll from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';



const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/post/new' component={PostNew} />
          <Route path='/post/:id' component={PostShow} />
          <Route path='/' component={PostAll} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
