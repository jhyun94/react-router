import React, { Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class PostNew extends Component{

  renderInput(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className="form-control" />
      </div>
    )

  }

  onSubmit(){
    console.log('submit working');
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
      </div>
    )
  }
}

export default reduxForm({
  form: 'post'
})(PostNew);