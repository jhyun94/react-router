import React, { Component} from 'react';
import { connect} from 'react-redux';
import { FetchPosts} from '../actions';
import { Link } from 'react-router-dom';

import _ from 'lodash';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.FetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, (post) => {
      return(
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }


  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add New Post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
}
export default connect(mapStateToProps, { FetchPosts})(PostsIndex);