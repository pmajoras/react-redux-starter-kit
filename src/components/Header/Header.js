import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

class Header extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.isAuthenticated !== this.props.isAuthenticated
  }

  render () {
    let links = []

    if (this.props.isAuthenticated) {
      links.push(' · ',
        <Link key={'Counter-1'} to='/counter' activeClassName='route--active'>
          Counter
        </Link>)
    } else {
      links.push(' · ',
        <Link key={'Login-1'} to='/login' activeClassName='route--active'>
          Login
        </Link>)
    }

    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        {links}
      </div>
    )
  }
}

export default Header

