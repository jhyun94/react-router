import React, { Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostNew extends Component{

  renderInput(field){  
     return(   
       <div className='form-group'>   
        <label>{field.label}</label>    
          <input    
          className="form-control"    
           type="text"
           onChange={field.input.onChange}/>     
      </div>    
     )   
 }

  onSubmit(values){
    this.props.createPost(values);
  }

  render(){
    const { handleSubmit}= this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        label="Post Title"
        name="title"
        component={this.renderInput}/>
        <Field
        label="Post Categories"
        name="categories"
        component={this.renderInput}/>
        <Field
        label="Post Content"
        name="content"
        component={this.renderInput}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/' className="btn btn-primary">Cancel</Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'post'
})(connect(null,{createPost})(PostNew));