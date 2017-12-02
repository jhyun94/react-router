import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.FetchPost(id);
  }
  render(){
    var { post} = this.props
    if (!post){
      return <div>...loading</div>
    }
    return (
      <div>
        <Link to='/'>Back to Home</Link>
        <h3>{post.title}</h3>
        <p>categories: {post.categories}</p>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { FetchPost })(PostShow);