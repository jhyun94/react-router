import React, { Component} from 'react';
import { Field, reduxForm} from 'redux-form';

class PostNew extends Component{

  renderInput(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className="form-control" />
      </div>
    )

  }
  render(){
    return(
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'post'
})(PostNew);