import { combineReducers } from 'redux';
import Posts from './reducer_posts'; 

const rootReducer = combineReducers({
  posts: Posts
});

export default rootReducer;
