export function ongListRequest(token) {
  return {
    type: '@ong/LIST_REQUEST',
    payload: { token }
  }
}

export function ongListSuccess(data) {
  return {
    type: '@ong/LIST_SUCCESS',
    payload: { data }
  }
}

export function createOngRequest(data, token) {
  console.log(data)
  return {
    type: '@ong/CREATE_ONG_REQUEST',
    payload: { data, token }
  }
}

export function createOngSuccess() {
  return {
    type: '@ong/CREATE_ONG_SUCCESS'
  }
}

export function ongRequest(ongId, token) {
  return {
    type: '@ong/REQUEST',
    payload: { ongId, token }
  }
}

export function ongSuccess(data) {
  return {
    type: '@ong/SUCCESS',
    payload: { data }
  }
}