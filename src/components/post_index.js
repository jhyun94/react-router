import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostAll extends Component{
  
  componentDidMount(){

  }

  render(){
    return(
      <div>
        <ul>
          {this.renderPosts}
        </ul>
      </div>
    )
  }
}

export default connect(null, {fetchPosts})(PostAll);