import { connect } from 'react-redux'
import Login from '../components/Login'
import { authenticate } from '../../../store/authentication'

const mapDispatchToProps = {
  authenticate
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
