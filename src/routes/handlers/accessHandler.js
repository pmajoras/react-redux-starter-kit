import storeService from '../../store/storeService'

export function canAccess(nextState, replace) {
  if (!storeService.isAuthenticated()) {
    replace({
      pathname: '/'
    })
  }
}