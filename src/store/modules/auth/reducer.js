import produce from 'immer';

const INITIAL_STATE = {
  token: false,
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.error = action.payload.message;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.loading = false
        break;
      }
      case '@auth/LOGOUT': {
        draft.token = null
        break;
      }
      default:
    }
  });
}
