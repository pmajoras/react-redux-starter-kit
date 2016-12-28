import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated
})

export default connect(mapStateToProps)(Header)
