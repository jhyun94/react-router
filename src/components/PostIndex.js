import React, { Component} from 'react';
import { connect} from 'react-redux';
import { FetchPosts} from '../actions';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.FetchPosts();
  }

  render(){
    return(
      <div>PostIndex</div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
}
export default connect(mapStateToProps, { FetchPosts})(PostsIndex);