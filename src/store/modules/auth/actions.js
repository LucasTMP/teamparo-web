export function signInRequest(data) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { data },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signFailure(message) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: { message },
  };
}

export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { data }
  }
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  }
}

export function logoutRequest() {
  return {
    type: '@auth/LOGOUT'
  }
}