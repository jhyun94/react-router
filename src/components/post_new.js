import React, { Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostNew extends Component{

  renderInput(field){ 
    console.log(field); 
     return(   
       <div className='form-group'>   
          <label>{field.label}</label>    
          <input    
            className="form-control"    
            type="text"
          {...field.input}/>
          <div>
            {field.meta.touched ? field.meta.error : '' }
           </div>     
        </div>    
     )   
 }

  onSubmit(values){
    console.log('submitted');
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

const validate = (values) => {
  const errors = {};
  if(!values.title){
    errors.title = 'Title must not be blank';
  }

  if(!values.categories){
    errors.categories = 'Categories must not be blank';
  }

  if(!values.content){
    errors.content = 'Content must not be blank';
  }

  return errors;
}

export default reduxForm({
  form: 'post',
  validate
})(connect(null,{createPost})(PostNew));