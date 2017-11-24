import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component{
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
          <input
          className="form-control"
          type="text"
          {...field.input} />
      </div>
    )
  }

  render(){
    return(
      <form>
        <Field
          label='Title'
          name='title'
          component={ this.renderField} />
        <Field 
          label='Categories'
          name='categories'
          component={ this.renderField} />
        <Field 
          label='Content'
          name='tags'
          component={ this.renderField} />
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
    errors.categories = 'Enter some content'
  }

  return errors;
}

export default reduxForm({
  form: 'PostNewForm' 
})(PostNew)