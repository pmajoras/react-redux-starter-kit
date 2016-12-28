

function authenticate (username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'TOKEN', isAuthenticated: true })
    }, 500)
  })
}

export default {
  authenticate: authenticate
}
