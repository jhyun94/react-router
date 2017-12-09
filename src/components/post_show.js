import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component{

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.id);
  }

  render(){
    return (
      <div>postshow!</div>
    )
  }
}
function mapStateToProps({ posts }){
  return { posts };
}
export default connect(mapStateToProps, {fetchPost})(PostShow);