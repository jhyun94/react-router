import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from '../actions';

class PostAll extends Component{
  
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item"
          key={post.title}>
          {post.title}
        </li>
      )
    })
  }

  render(){
    console.log(this.props.posts);
    return(
      <div>
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