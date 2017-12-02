import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxPromise from 'redux-promise';

import reducers from './reducers';
import PostAll from './components/post_index';



const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route to='/' component={PostAll} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
