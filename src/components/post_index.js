import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostAll extends Component{
  
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <ul>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return {posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostAll);