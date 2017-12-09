import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JONJON123';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(post){
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, post);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  return {
    type: FETCH_POST,
    payload: id
  }
}