import React, { Component, PropTypes } from 'react'
import reactStateHelper from '../../../core/reactStateHelper'

class Login extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }

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

  render () {
    const { username, password } = this.state

    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Login: Test</h2>
        Username:
        <input type='text' value={username} name='username'
          onChange={(e) => reactStateHelper.handleInputChange(e, this)} />
        <br />
        Password:
        <input type='text' value={password} name='password'
          onChange={(e) => reactStateHelper.handleInputChange(e, this)} />
        <br />
        <br />
        <button className='btn btn-default' onClick={() => this.props.authenticate(username, password)}>
          Test Login
        </button>
      </div>
    )
  }
}

export default Login
