import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function Posts(state={}, action){
  switch(action.type){
    case FETCH_POST:
      console.log(action.payload);
      return state;
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
  }
  return state;
}