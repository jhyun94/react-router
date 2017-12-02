import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPost, DeletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.FetchPost(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params
    this.props.DeletePost(id, () => {
      this.props.history.push('/');
    })
  }

  render(){
    var { post} = this.props
    if (!post){
      return <div>...loading</div>
    }
    return (
      <div>
        <Link to='/'>Back to Home</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
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

export default connect(mapStateToProps, { FetchPost, DeletePost })(PostShow);