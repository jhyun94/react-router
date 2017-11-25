import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link} from 'react-router-dom';

class PostNew extends Component{

  renderField(field){
    const { meta} = field;
    const className=`form-group ${meta.touched && meta.error ? 'has-danger' : '' }`;
    return(
      <div className={className}>
        <label>{field.label}</label>
          <input
          className="form-control"
          type="text"
          {...field.input} />
          <div className="text-help">
            {field.meta.touched ? field.meta.error : ''}
          </div>
      </div>
    )
  }
  onSubmit(values){
    console.log(values);
  }
  render(){
    const { handleSubmit} = this.props
    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title for Post'
          name="title"
          component={ this.renderField} />
        <Field 
          label='Categories'
          name="categories"
          component={ this.renderField} />
        <Field 
          label='Post Content'
          name="content"
          component={ this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/' className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}


function validate(values){
  const errors = {};

  if (!values.title || values.title.length < 3){
    errors.title = 'The title must have at least 3 characters'
  }

  if (!values.categories){
    errors.categories = 'Enter a category'
  }

  if (!values.content){
    errors.content = 'Enter some content'
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm' 
})(PostNew)