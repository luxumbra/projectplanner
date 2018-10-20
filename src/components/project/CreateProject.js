import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectActions'



export class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
  }
  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <form onSubmit={this.handleSubmit} className="white z-depth-5">
              <h5 className="grey-text darken-3">Create Project</h5>
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchtoProps) (CreateProject)
