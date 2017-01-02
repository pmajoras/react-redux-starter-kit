import React, { Component, PropTypes } from 'react'
import reactStateHelper from '../../../core/reactStateHelper'
import genericHelper from '../../../core/genericHelper'
import './Login.scss'

class Login extends Component {

  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.authenticate !== this.props.authenticate ||
      nextState.username !== this.state.username ||
      nextState.password !== this.state.password
  }

  getFormValidationState() {
    let formGroupErrorClass = 'has-warning'
    let errorClass = 'form-control-warning'
    let isUsernameValid = genericHelper.isStringAndNotEmpty(this.state.username)
    let isPasswordValid = genericHelper.isStringAndNotEmpty(this.state.password)

    return {
      username: {
        formGroupClass: isUsernameValid ? 'has-success' : (this.state.usernameChanged ? formGroupErrorClass : ''),
        inputClass: isUsernameValid ? 'form-control-success' : (this.state.usernameChanged ? errorClass : ''),
        hasError: !isUsernameValid,
        messageStyle: {display: isUsernameValid || !this.state.usernameChanged ? 'none' : ''}
      },
      password: {
        formGroupClass: isPasswordValid ? 'has-success' : (this.state.passwordChanged ? formGroupErrorClass : ''),
        inputClass: isPasswordValid ? 'form-control-success' : (this.state.passwordChanged ? errorClass : ''),
        hasError: !isPasswordValid,
        messageStyle: {display: isPasswordValid || !this.state.passwordChanged ? 'none' : ''}
      }
    }
  }

  isFormValid() {
    const formState = this.getFormValidationState()
    return !formState.username.hasError && !formState.password.hasError
  }

  render () {
    const { username, password } = this.state
    const formValidationState = this.getFormValidationState()
    const isSignButtonDisabled = !this.isFormValid()

    return (
      <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-12 bg-faded login-form">
          <div>
            <div class="d-inline-block">
              <h3>Login into DASHBOARDS-ADMIN</h3>
              <p class="mt-2">Enter your username and password to log on:</p>
            </div>
             <i class="fa fa-4x fa-key pull-right"></i>
          </div>
			    <form role="form" class="mt-2">
			      <div class={`form-group ${formValidationState.username.formGroupClass}`}>
			        <label class="form-control-label" for="form-username">Username</label>
			        <input type="text" name='username' placeholder="Username..." 
                onChange={(e) => reactStateHelper.handleInputChange(e, this)}
                value={username} class={`form-control ${formValidationState.username.inputClass}`} id="form-username"/>
               <div class="form-control-feedback" style={formValidationState.username.messageStyle}>Username is required.</div>
			      </div>
			      <div class={`form-group ${formValidationState.password.formGroupClass}`}>
			        <label class="form-control-label" for="form-password">Password</label>
			        <input type="password" value={password} name='password' 
                onChange={(e) => reactStateHelper.handleInputChange(e, this)}
                placeholder="Password..." 
                class={`form-control ${formValidationState.password.inputClass}`} id="form-password"/>
                <div class="form-control-feedback" style={formValidationState.password.messageStyle}>Password is required.</div>
			      </div>
			      <button type="button" class="btn btn-success btn-lg btn-block" disabled={isSignButtonDisabled} onClick={() => this.props.authenticate(username, password)}>Sign in!</button>
			    </form>
		    </div>
      </div>
    )
  }
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login
