import React, { Component} from 'react';
import { connect} from 'react-redux';
import { FetchPosts} from '../actions';

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
      <ul className="list-group">{this.renderPosts()}</ul>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
}
export default connect(mapStateToProps, { FetchPosts})(PostsIndex);