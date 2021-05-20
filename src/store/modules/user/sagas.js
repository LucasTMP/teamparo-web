import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { toast } from 'react-toastify';
import history from '../../../services/history'


import { userRequest, userSuccess } from './actions'

// export function* listOngs({ payload }) {
//   try {
//     const { token } = payload;
//     const response = yield call(api.get, 'ong', {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     yield put(ongListSuccess(response.data));
//   } catch (err) {
//     //yield put(signFailure('Error'));
//   }
// }

// export function* createOng({ payload }) {
//   try {
//     console.log(payload)
//     const { data, token } = payload
//     const response = yield call(api.post, 'ong', data, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     toast.success('Ong criada com successo!');
//     console.log(response.data)
//     window.localStorage.setItem('@teamparo:ongId', response.data._id)
//     history.push('/dashboard')
//   } catch (err) {
//     console.log(err)
//     toast.error('Já existe uma conta com o email informado!');
//   }
// }

export function* getUser({ payload }) {
  try {
    const { id, token } = payload

    const response = yield call(api.get, `profile/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(userSuccess(response.data))
  } catch (err) {
    console.log(err)
    toast.error('Já existe uma conta com o email informado!');
  }
}


export default all([
  // takeLatest('@user/LIST_REQUEST', listuserss),
  // takeLatest('@user/CREATE_ONG_REQUEST', createOng),
  takeLatest('@user/REQUEST', getUser),

]);
