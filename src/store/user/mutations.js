export function setLoggedIn(state, payload) {
  state.isLoggedIn = payload.isLoggedIn;
}

export function setUserInfo(state, payload) {
  state.userInfo = payload.userInfo;
}
