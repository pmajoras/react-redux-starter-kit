import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

const activeClassName = 'active'

class Header extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.isAuthenticated !== this.props.isAuthenticated
  }

  render () {
    let links = []

    if (this.props.isAuthenticated) {
      links.push(
        <li class="nav-item" key={'Counter-1'}>
          <Link to='/counter' class="nav-link" activeClassName={activeClassName}>
            Counter
          </Link>
        </li>)
    } else {
      links.push(
        <li class="nav-item" key={'Login-1'}>
          <Link to='/login' class="nav-link" activeClassName={activeClassName}>
            Login
          </Link>
        </li>)
    }

    return (
      <nav class="navbar navbar-full navbar-dark bg-inverse">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <IndexLink to='/' class="nav-link" activeClassName={activeClassName}>
                Home
            </IndexLink>
          </li>
          {links}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="supportedContentDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline float-xs-right">
          <input class="form-control" type="text" placeholder="Search"/>
          <button class="btn btn-outline-success" type="button">Search</button>
        </form>
      </nav>
    )
  }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool
}

export default Header

