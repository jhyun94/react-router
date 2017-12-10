import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function Posts(state={}, action){
  switch(action.type){
    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
  }
  return state;
}