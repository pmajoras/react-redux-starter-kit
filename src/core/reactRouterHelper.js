import { browserHistory } from 'react-router'

function redirectToHome () {
  browserHistory.push('/')
}

export default {
  redirectToHome: redirectToHome
}
