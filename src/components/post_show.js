import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPost } from '../actions';

class PostShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.FetchPost(id);
  }
  render(){
    return (
      <div>Post Show!</div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { FetchPost })(PostShow);