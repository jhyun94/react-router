import { combineReducers } from 'redux';

import Posts from './reducer_posts';

const rootReducer = combineReducers({
  Posts: Posts
});

export default rootReducer;
