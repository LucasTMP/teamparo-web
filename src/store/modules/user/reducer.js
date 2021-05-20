import produce from 'immer';

const INITIAL_STATE = {
  users: null,
  user: null,
  loading: true
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@users/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@users/SUCCESS': {
        draft.loading = false;
        draft.users = action.payload.data
        break;
      }
      default:
    }
  });
}
