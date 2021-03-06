import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'

export class SignIn extends Component {
  state ={
    email: '',
    password: ''
  }
  handleChange = (e) => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {

    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <form onSubmit={this.handleSubmit} className="white z-depth-5">
                <h5 className="grey-text darken-3">Sign In</h5>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">Log In</button>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
