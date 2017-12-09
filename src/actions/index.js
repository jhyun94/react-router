import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JONJON123';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(post){
  console.log(post);
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, post);
  return {
    type: CREATE_POST,
    payload: request
  }
}