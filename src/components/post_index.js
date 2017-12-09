import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostAll extends Component{
  
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, (post) => {
      return (
        <Link to={`/post/${post.id}`}>
          <li className="list-group-item"
            key={post.title}>
            {post.title}
          </li>
        </Link>  
      )
    })
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary"
           to='/post/new'>
            Create Post
          </Link>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return {posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostAll);