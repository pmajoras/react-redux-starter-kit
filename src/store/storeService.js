
class StoreService {
  constructor() {
    this.store = null;
  }

  setStore(store) {
      this.store = store;
  }

  isAuthenticated() {
    let state = this.store.getState();
    return state && state.authentication && state.authentication.isAuthenticated
  }

  dispatch(actionResult) {
    this.store.dispatch(actionResult)
  }
}

export default new StoreService()