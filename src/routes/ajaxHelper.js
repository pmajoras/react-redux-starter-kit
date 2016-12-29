import { redirectToHome } from '../core/reactRouterHelper'
import { authenticationChange } from '../store/authentication'
import storeService from '../store/storeService'

const toPromise = function (ajaxPromise) {
  return new Promise(function (resolve, reject) {
    ajaxPromise.then(resolve, reject)
  })
}

export function handleAjaxResponse(ajaxPromise) {
  promise = toPromise(ajaxPromise)
  return promise.then((data) => {
      return data
    })
    .catch((xhr) => {
      if(xhr.status === 401) {
        storeService.dispatch(authenticationChange({ isAuthenticated: false }))
        redirectToHome()
      }
    })
}