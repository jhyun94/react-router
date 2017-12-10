import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component{

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.id);
  }

  render(){
    if(!this.props.post){
      <div>..loading</div>
    }
    return (
      <div>
      <h2>{this.props.post.title}</h2>
      <p>Categories: {this.props.post.categories}</p>
      <p>{this.props.post.content}</p>
      </div>
    )
  }
}
function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {fetchPost})(PostShow);