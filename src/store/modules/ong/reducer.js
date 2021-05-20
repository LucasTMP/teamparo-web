import produce from 'immer';

const INITIAL_STATE = {
  ongs: null,
  ong: null,
  loading: true
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@ong/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/LIST_SUCCESS': {
        draft.ongs = action.payload.data
        draft.loading = false;
        break;
      }
      case '@ong/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/SUCCESS': {
        draft.loading = false;
        draft.ong = action.payload.data
        break;
      }
      default:
    }
  });
}
