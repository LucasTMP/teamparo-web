
  export function createuserRequest(data, token) {
    console.log(data)
    return {
      type: '@user/CREATE_user_REQUEST',
      payload: { data, token }
    }
  }
  
  export function createuserSuccess() {
    return {
      type: '@user/CREATE_user_SUCCESS'
    }
  }
  
  export function userRequest(userId, token) {
    return {
      type: '@user/REQUEST',
      payload: { userId, token }
    }
  }
  
  export function userSuccess(data) {
    return {
      type: '@user/SUCCESS',
      payload: { data }
    }
  }